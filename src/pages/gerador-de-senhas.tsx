import { useState, useEffect, useCallback } from 'react';
import { Shield, Copy, RefreshCw, Eye, EyeOff } from 'lucide-react';
// @ts-ignore - zxcvbn types may not be perfect
import zxcvbn from 'zxcvbn';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GeradorSenhas = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [strength, setStrength] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(true);
  const { toast } = useToast();

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
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
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-1">
        <Card className="w-full max-w-2xl mx-auto bg-card/50 border-border/50 backdrop-blur-xl shadow-lg">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-card/80 to-transparent">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <Shield className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
                  Gerador de Senhas <span className="text-primary">Cyber</span>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Gere senhas ultra-seguras com criptografia de ponta.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 pt-8">
            {/* Password Display */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex items-center gap-2 bg-card border border-border p-1 rounded-xl">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  readOnly
                  className="bg-transparent border-none text-xl md:text-2xl font-mono text-primary placeholder:text-primary/20 focus-visible:ring-0 h-14"
                />
                <div className="flex items-center gap-1 pr-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={generatePassword}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={copyToClipboard}
                    className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-4"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar
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
                    max={64}
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
          
          <div className="p-4 bg-primary/5 border-t border-border/50 text-center">
            <p className="text-[10px] text-primary/60 uppercase tracking-[0.2em]">
              Protegido por Protocolos de Segurança Cafe com Cyber
            </p>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default GeradorSenhas;
