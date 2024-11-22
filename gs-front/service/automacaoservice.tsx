import axios from "axios";
import { api } from './api';

interface Consumo {
  horario: string;
  nivelConsumo: number;
  tipoDispositivo: string;
}

interface AutomacaoResponse {
  acao: string;
  horarioPico: boolean;
}

export const automacaoService = {
  async verificarConsumo(consumo: Consumo): Promise<AutomacaoResponse> {
    try {
      const response = await api.post('/automacao/verificar', consumo);
      return response.data;
    } catch (error) {
      console.error('Erro ao verificar consumo:', error);
      throw error;
    }
  }
};

export const axiosInstence = axios.create({

})
