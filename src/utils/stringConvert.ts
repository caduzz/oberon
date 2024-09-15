export const limitarString = (str: string, limite: number) => {
    if (str.length <= limite) {
      return str; // Retorna a string original se estiver dentro do limite
    } else {
      return str.slice(0, limite) + '...'; // Corta a string e adiciona reticências
    }
  }
  