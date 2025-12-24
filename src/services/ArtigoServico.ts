// src/services/ArtigoServico.ts
// Supondo que você tenha uma interface Article
interface Artigo {
  id: string;
  title: string;
  // ... outras propriedades
}

// ALTERAÇÃO 1: Renomeação da URL da API (de articles-ccc-api para artigos-ccc-api)
const API_URL = 'https://artigos-ccc-api.oseasfr.workers.dev/api';

// ALTERAÇÃO 2: Renomeação da classe/função
const ArtigoServico = {
  // ALTERAÇÃO 3: Renomeação da função e tipo de retorno
  async getAllArtigos( ): Promise<Artigo[]> {
    // ALTERAÇÃO 4: Renomeação da rota na API
    const res = await fetch(`${API_URL}/artigos`);
    if (!res.ok) {
      throw new Error('Falha ao buscar artigos');
    }
    return res.json();
  },

  // ALTERAÇÃO 5: Renomeação da função e tipo de retorno
  async getArtigoById(id: string): Promise<Artigo | null> {
    // ALTERAÇÃO 6: Renomeação da rota na API
    const res = await fetch(`${API_URL}/artigos/${id}`);
    if (res.status === 404) {
      return null;
    }
    if (!res.ok) {
      throw new Error('Falha ao buscar artigo');
    }
    return res.json();
  },

  // ALTERAÇÃO 7: Renomeação da função e tipo de retorno
  async createArtigo(artigo: Artigo): Promise<Artigo> {
    // ALTERAÇÃO 8: Renomeação da rota na API
    const res = await fetch(`${API_URL}/artigos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artigo),
    });
    if (!res.ok) {
      throw new Error('Falha ao criar artigo');
    }
    return res.json();
  },

  // ALTERAÇÃO 9: Renomeação da função e tipo de retorno
  async updateArtigo(id: string, artigo: Partial<Artigo>): Promise<Artigo> {
    // ALTERAÇÃO 10: Renomeação da rota na API
    const res = await fetch(`${API_URL}/artigos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artigo),
    });
    if (!res.ok) {
      throw new Error('Falha ao atualizar artigo');
    }
    return res.json();
  },

  // ALTERAÇÃO 11: Renomeação da função
  async deleteArtigo(id: string): Promise<void> {
    // ALTERAÇÃO 12: Renomeação da rota na API
    const res = await fetch(`${API_URL}/artigos/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Falha ao deletar artigo');
    }
  },
};

// ALTERAÇÃO 13: Renomeação do export
export default ArtigoServico;
