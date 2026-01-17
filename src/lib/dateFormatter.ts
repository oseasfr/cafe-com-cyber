/**
 * Função utilitária para formatar datas no formato brasileiro
 * Formato de saída: "DD/MM/AAAA, às HH:MM"
 * Exemplo: "15/12/2025, às 20:15"
 */

/**
 * Calcula quantos dias se passaram desde a data fornecida até hoje
 * @param date - Data em formato ISO string, Date object, ou string compatível
 * @returns String formatada: "há X dias", "há 1 dia", "hoje", etc.
 */
export function formatDaysAgo(date: string | Date | undefined): string {
  if (!date) {
    return "Data não disponível";
  }

  try {
    let dateObj: Date;
    
    if (typeof date === "string") {
      // Se a string não tem timezone (formato "YYYY-MM-DDTHH:mm:ss"), 
      // assume que é UTC para evitar problemas de timezone local
      if (date.includes('T') && !date.includes('Z') && !date.includes('+') && !date.includes('-', 10)) {
        // Formato: "2025-01-15T10:00:00" - adiciona Z para UTC
        dateObj = new Date(date + 'Z');
      } else {
        // Já tem timezone ou formato diferente
        dateObj = new Date(date);
      }
    } else {
      dateObj = date;
    }

    // Verifica se a data é válida
    if (isNaN(dateObj.getTime())) {
      return "Data inválida";
    }

    const now = new Date();
    
    // Converte ambas as datas para UTC no início do dia para evitar problemas de timezone
    // Usa UTC para garantir consistência independente do timezone do navegador
    const todayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    const publishDateUTC = new Date(Date.UTC(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate()));
    
    // Calcula a diferença em milissegundos
    const diffTime = todayUTC.getTime() - publishDateUTC.getTime();
    
    // Calcula a diferença em dias (positiva = passado, negativa = futuro)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Se a data for no futuro
    if (diffDays < 0) {
      // Se for muito próximo (menos de 1 dia no futuro), considera como hoje
      if (diffDays >= -1) {
        return "hoje";
      }
      // Para datas futuras, mostra "em breve" ou a data formatada
      // Mas se a diferença for pequena (menos de 30 dias), mostra quantos dias falta
      if (diffDays >= -30) {
        return `em ${Math.abs(diffDays)} dias`;
      }
      // Caso contrário, mostra a data formatada
      const day = String(publishDateUTC.getUTCDate()).padStart(2, "0");
      const month = String(publishDateUTC.getUTCMonth() + 1).padStart(2, "0");
      const year = publishDateUTC.getUTCFullYear();
      return `${day}/${month}/${year}`;
    }

    // Se for hoje (0 dias de diferença)
    if (diffDays === 0) {
      // Calcula horas/minutos da diferença real (com hora)
      const hoursDiff = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60 * 60));
      if (hoursDiff < 0) {
        // Se ainda não passou (futuro dentro do mesmo dia)
        return "hoje";
      }
      if (hoursDiff === 0) {
        const minutesDiff = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60));
        if (minutesDiff <= 1) {
          return "há poucos instantes";
        }
        return `há ${minutesDiff} minutos`;
      }
      if (hoursDiff === 1) {
        return "há 1 hora";
      }
      return `há ${hoursDiff} horas`;
    }

    // Se for há 1 dia
    if (diffDays === 1) {
      return "há 1 dia";
    }

    // Se for há mais de 1 dia
    return `há ${diffDays} dias`;
  } catch (error) {
    console.error("Erro ao calcular dias:", error);
    return "Data inválida";
  }
}

/**
 * Formata uma data para o padrão brasileiro
 * @param date - Data em formato ISO string, Date object, ou string compatível
 * @returns String formatada: "DD/MM/AAAA, às HH:MM"
 * @deprecated Use formatDaysAgo() para exibir "há X dias"
 */
export function formatArticleDate(date: string | Date | undefined): string {
  if (!date) {
    return "Data não disponível";
  }

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    // Verifica se a data é válida
    if (isNaN(dateObj.getTime())) {
      return "Data inválida";
    }

    // Formata dia e mês com zero à esquerda se necessário
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    // Formata hora e minuto com zero à esquerda se necessário
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year}, às ${hours}:${minutes}`;
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return "Data inválida";
  }
}

/**
 * Formata apenas a data (sem hora)
 * @param date - Data em formato ISO string, Date object, ou string compatível
 * @returns String formatada: "DD/MM/AAAA"
 */
export function formatDateOnly(date: string | Date | undefined): string {
  if (!date) {
    return "Data não disponível";
  }

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) {
      return "Data inválida";
    }

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return "Data inválida";
  }
}
