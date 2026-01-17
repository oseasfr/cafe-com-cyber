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
    const dateObj = typeof date === "string" ? new Date(date) : date;

    // Verifica se a data é válida
    if (isNaN(dateObj.getTime())) {
      return "Data inválida";
    }

    const now = new Date();
    const diffTime = now.getTime() - dateObj.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Se for hoje (menos de 24 horas)
    if (diffDays === 0) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        if (diffMinutes === 0) {
          return "Poucos segundos atrás";
        }
        if (diffMinutes === 1) {
          return "1 minuto atrás";
        }
        return `${diffMinutes} minutos atrás`;
      }
      if (diffHours === 1) {
        return "1 hora atrás";
      }
      return `${diffHours} horas atrás`;
    }

    // Se for há 1 dia
    if (diffDays === 1) {
      return "1 dia atrás";
    }

    // Se for há mais de 1 dia
    return `${diffDays} dias atrás`;
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
