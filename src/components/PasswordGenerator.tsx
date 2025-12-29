import { useState, useEffect, useCallback } from 'react';
import { Copy, RefreshCw, Eye, EyeOff, Search } from 'lucide-react';
// @ts-ignore - zxcvbn types may not be perfect
import zxcvbn from 'zxcvbn';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface StrengthResult {
  score: number;
  strength: string;
  color: string;
  info: string;
  zxcvbnScore: number;
}

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [customPassword, setCustomPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [strength, setStrength] = useState<any>(null);
  const [customStrength, setCustomStrength] = useState<StrengthResult | null>(null);
  const [showPassword, setShowPassword] = useState(true);
  const [showCustomPassword, setShowCustomPassword] = useState(false);
  const { toast } = useToast();

  // Função de análise de força da senha (adaptada do código original)
  const calcularForçaSenha = useCallback((password: string): StrengthResult => {
    if (!password) {
      return {
        score: 0,
        strength: 'Vazia',
        color: '#c0c0c0',
        info: 'Digite uma senha para avaliação.',
        zxcvbnScore: 0
      };
    }

    try {
      const result = zxcvbn(password);
      let zxcvbnScore = result.score;
      const feedback = result.feedback;
      
      // Ajustar score baseado no comprimento (similar ao Bitwarden)
      const length = password.length;
      
      // Penalizar senhas muito curtas mesmo com variedade
      if (length < 12) {
        zxcvbnScore = Math.min(zxcvbnScore, 1); // No máximo "Fraca"
      } else if (length < 14) {
        zxcvbnScore = Math.min(zxcvbnScore, 2); // No máximo "Razoável"
      } else if (length < 16) {
        zxcvbnScore = Math.min(zxcvbnScore, 3); // No máximo "Boa"
      }

      let score, strength, color, info;
      let suggestions: string[] = [];

      switch (zxcvbnScore) {
        case 0:
          score = 20;
          strength = 'Muito fraca';
          color = '#ff4d4d';
          info = 'Senha facilmente quebrável';
          break;
        case 1:
          score = 40;
          strength = 'Fraca';
          color = '#ffaa00';
          info = 'Pode ser quebrada rapidamente';
          break;
        case 2:
          score = 60;
          strength = 'Razoável';
          color = '#ffff00';
          info = 'Segurança moderada';
          break;
        case 3:
          score = 80;
          strength = 'Boa';
          color = '#aaff00';
          info = 'Boa segurança';
          break;
        case 4:
          score = 100;
          strength = 'Forte';
          color = '#66ff66';
          info = 'Senha excelente';
          break;
        default:
          score = 0;
          strength = 'Desconhecida';
          color = '#c0c0c0';
          info = 'Não foi possível avaliar';
      }

      // Mostrar tempo estimado de quebra (traduzido)
      if (result.crack_times_display) {
        const tempoOffline = result.crack_times_display.offline_slow_hashing_1e4_per_second;
        if (tempoOffline) {
          // Traduzir tempos
          const tempoTraduzido = tempoOffline
            .replace('less than a second', 'menos de um segundo')
            .replace('seconds', 'segundos')
            .replace('second', 'segundo')
            .replace('minutes', 'minutos')
            .replace('minute', 'minuto')
            .replace('hours', 'horas')
            .replace('hour', 'hora')
            .replace('days', 'dias')
            .replace('day', 'dia')
            .replace('months', 'meses')
            .replace('month', 'mês')
            .replace('years', 'anos')
            .replace('year', 'ano')
            .replace('centuries', 'séculos')
            .replace('century', 'século');
          
          info += ` - Tempo estimado: ${tempoTraduzido}`;
        }
      }

      // Traduzir avisos para português
      if (feedback.warning) {
        const avisos: Record<string, string> = {
          'This is a top-10 common password': 'Esta é uma das 10 senhas mais comuns',
          'This is a top-100 common password': 'Esta é uma das 100 senhas mais comuns',
          'This is a very common password': 'Esta é uma senha muito comum',
          'This is similar to a commonly used password': 'Similar a uma senha comum',
          'A word by itself is easy to guess': 'Uma palavra sozinha é fácil de adivinhar',
          'Names and surnames by themselves are easy to guess': 'Nomes sozinhos são fáceis de adivinhar',
          'Common names and surnames are easy to guess': 'Nomes comuns são fáceis de adivinhar',
          'Straight rows of keys are easy to guess': 'Sequências de teclas são fáceis de adivinhar',
          'Short keyboard patterns are easy to guess': 'Padrões curtos de teclado são fáceis',
          'Repeats like "aaa" are easy to guess': 'Repetições como "aaa" são fáceis',
          'Repeats like "abcabcabc" are only slightly harder to guess than "abc"': 'Repetições são pouco mais difíceis',
          'Sequences like abc or 6543 are easy to guess': 'Sequências como abc ou 6543 são fáceis',
          'Recent years are easy to guess': 'Anos recentes são fáceis de adivinhar',
          'Dates are often easy to guess': 'Datas são fáceis de adivinhar'
        };
        
        const avisoTraduzido = avisos[feedback.warning] || feedback.warning;
        suggestions.push(avisoTraduzido);
      }

      // Traduzir sugestões para português
      if (feedback.suggestions && feedback.suggestions.length > 0) {
        const traducoes: Record<string, string> = {
          'Add another word or two. Uncommon words are better.': 'Adicione mais palavras incomuns',
          'Use a longer keyboard pattern with more turns': 'Use padrão de teclado mais longo',
          'Avoid repeated words and characters': 'Evite repetições',
          'Avoid sequences': 'Evite sequências',
          'Avoid recent years': 'Evite anos recentes',
          'Avoid years that are associated with you': 'Evite anos pessoais',
          'Avoid dates and years that are associated with you': 'Evite datas pessoais',
          'Capitalization doesn\'t help very much': 'Maiúsculas ajudam pouco',
          'All-uppercase is almost as easy to guess as all-lowercase': 'Tudo maiúsculo é fácil de adivinhar',
          'Reversed words aren\'t much harder to guess': 'Palavras invertidas são fáceis',
          'Predictable substitutions like \'@\' instead of \'a\' don\'t help very much': 'Substituições previsíveis ajudam pouco',
          'Use a few words, avoid common phrases': 'Use palavras, evite frases comuns',
          'No need for symbols, digits, or uppercase letters': 'Não precisa de símbolos ou maiúsculas'
        };
        
        feedback.suggestions.slice(0, 2).forEach((s: string) => {
          const traducao = traducoes[s] || s;
          suggestions.push(traducao);
        });
      }

      // Adicionar dicas específicas baseadas no score e comprimento
      if (length < 16) {
        suggestions.push('Use pelo menos 16 caracteres para maior segurança');
      }
      if (zxcvbnScore < 3) {
        if (!/[A-Z]/.test(password) && !/[a-z]/.test(password)) {
          suggestions.push('Adicione letras maiúsculas e minúsculas');
        }
        if (!/[0-9]/.test(password)) {
          suggestions.push('Adicione números');
        }
        if (!/[!@#$%&*()_+=\-]/.test(password)) {
          suggestions.push('Adicione símbolos especiais');
        }
      }

      // Construir texto final
      let finalInfo = info;
      if (suggestions.length > 0) {
        const uniqueSuggestions = [...new Set(suggestions)].slice(0, 3);
        finalInfo += '. Dicas: ' + uniqueSuggestions.join('; ');
      }

      return { score, strength, color, info: finalInfo, zxcvbnScore };
    } catch (error) {
      console.error('Error calculating password strength:', error);
      return {
        score: 0,
        strength: 'Erro',
        color: '#c0c0c0',
        info: 'Não foi possível analisar a senha.',
        zxcvbnScore: 0
      };
    }
  }, []);

  const generatePassword = useCallback(() => {
    const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };

    let charset = '';
    if (options.uppercase) charset += charSets.uppercase;
    if (options.lowercase) charset += charSets.lowercase;
    if (options.numbers) charset += charSets.numbers;
    if (options.symbols) charset += charSets.symbols;

    if (charset === '') {
      toast({
        title: "Erro",
        description: "Selecione pelo menos um tipo de caractere.",
        variant: "destructive",
      });
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  }, [length, options, toast]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Análise da senha gerada
  useEffect(() => {
    if (password) {
      try {
        const result = zxcvbn(password);
        setStrength(result);
      } catch (error) {
        console.error('Error calculating password strength:', error);
      }
    }
  }, [password]);

  // Análise da senha customizada
  useEffect(() => {
    if (customPassword) {
      const result = calcularForçaSenha(customPassword);
      setCustomStrength(result);
    } else {
      setCustomStrength(null);
    }
  }, [customPassword, calcularForçaSenha]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Senha copiada para a área de transferência.",
    });
  };

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getStrengthLabel = (score: number) => {
    switch (score) {
      case 0: return 'Muito Fraca';
      case 1: return 'Fraca';
      case 2: return 'Razoável';
      case 3: return 'Boa';
      case 4: return 'Forte';
      default: return 'N/A';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/50 border-border/50 backdrop-blur-xl shadow-lg">
      <CardContent className="space-y-8 pt-8">
        {/* Seção: Análise de Senha Customizada */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-primary" />
            <Label className="text-base font-semibold">Analisar Senha</Label>
          </div>
          <div className="relative">
            <Input
              type={showCustomPassword ? "text" : "password"}
              value={customPassword}
              onChange={(e) => setCustomPassword(e.target.value)}
              placeholder="Digite uma senha para análise..."
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setShowCustomPassword(!showCustomPassword)}
            >
              {showCustomPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
          </div>
          
          {/* Resultado da Análise Customizada */}
          {customStrength && (
            <div className="space-y-3 p-4 rounded-lg border border-border bg-card/30">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Força: <span style={{ color: customStrength.color }} className="font-bold">{customStrength.strength}</span>
                </Label>
                <span className="text-sm font-bold px-2 py-0.5 rounded border" style={{ 
                  color: customStrength.color, 
                  borderColor: customStrength.color + '40',
                  backgroundColor: customStrength.color + '10'
                }}>
                  {customStrength.score}/100
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ 
                    width: `${customStrength.score}%`,
                    backgroundColor: customStrength.color
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {customStrength.info}
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-border/50 pt-6">
          <Label className="text-base font-semibold mb-4 block">Gerar Nova Senha</Label>
        </div>

        {/* Password Display */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative flex items-center gap-2 bg-card border border-border p-1 rounded-xl">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="bg-transparent border-none text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-primary placeholder:text-primary/20 focus-visible:ring-0 h-12 sm:h-14 flex-1 min-w-0"
            />
            <div className="flex items-center gap-1 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={generatePassword}
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                onClick={() => copyToClipboard(password)}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-2 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm"
              >
                <Copy className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Copiar</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Strength Meter */}
        {strength && (
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Força da Senha</Label>
              <span className={cn(
                "text-sm font-bold px-2 py-0.5 rounded border",
                strength.score <= 1 ? "text-red-400 border-red-400/20 bg-red-400/5" :
                strength.score === 2 ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" :
                "text-emerald-400 border-emerald-400/20 bg-emerald-400/5"
              )}>
                {getStrengthLabel(strength.score)}
              </span>
            </div>
            <div className="flex gap-1.5 h-2">
              {[0, 1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={cn(
                    "flex-1 rounded-full transition-all duration-500",
                    strength.score > step ? getStrengthColor(strength.score) : "bg-muted"
                  )}
                />
              ))}
            </div>
            {strength.crack_times_display && (
              <p className="text-xs text-muted-foreground italic">
                Tempo estimado para quebrar: <span className="text-foreground">{strength.crack_times_display.offline_slow_hashing_1e4_per_second || 'Mais de 100 séculos'}</span>
              </p>
            )}
          </div>
        )}

        {/* Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-foreground">Comprimento: <span className="text-primary font-mono">{length}</span></Label>
              </div>
              <Slider
                value={[length]}
                onValueChange={(val) => setLength(val[0])}
                max={30}
                min={8}
                step={1}
                className="py-4"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {Object.entries(options).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                <Label htmlFor={key} className="capitalize text-foreground cursor-pointer">
                  {key === 'uppercase' ? 'Maiúsculas' : 
                   key === 'lowercase' ? 'Minúsculas' : 
                   key === 'numbers' ? 'Números' : 'Símbolos'}
                </Label>
                <Switch
                  id={key}
                  checked={value}
                  onCheckedChange={(checked) => setOptions(prev => ({ ...prev, [key]: checked }))}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordGenerator;
