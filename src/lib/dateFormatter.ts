/**
 * Função utilitária para formatar datas no formato brasileiro
 * Formato de saída: "DD/MM/AAAA, às HH:MM"
 * Exemplo: "15/12/2025, às 20:15"
 */

/**
 * Formata uma data para o padrão brasileiro
 * @param date - Data em formato ISO string, Date object, ou string compatível
 * @returns String formatada: "DD/MM/AAAA, às HH:MM"
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
