

export interface DispositivoStatus {
    id: number;
    nome: string;
    status: string;
    nivelConsumo: number;
}

// Dados mockados para teste inicial
const dispositivosMock = [
    { id: 1, nome: 'Ar Condicionado', status: 'Ligado', nivelConsumo: 1500 },
    { id: 2, nome: 'Máquina de Lavar', status: 'Desligado', nivelConsumo: 1000 },
    { id: 3, nome: 'Chuveiro Elétrico', status: 'Desligado', nivelConsumo: 4500 }
];

export const automacaoService = {
    async getDispositivos(): Promise<DispositivoStatus[]> {
        // Por enquanto, retorna dados mockados
        return Promise.resolve(dispositivosMock);
    },

    async verificarConsumo(dispositivo: DispositivoStatus) {
        // Lógica local para simular a verificação
        const horaPico = new Date().getHours() >= 18 && new Date().getHours() <= 21;
        const consumoAlto = dispositivo.nivelConsumo > 2000;

        if (horaPico && consumoAlto) {
            return { acao: 'Desligar', motivo: 'Consumo alto em horário de pico' };
        } else if (consumoAlto) {
            return { acao: 'Atenção', motivo: 'Consumo elevado' };
        } else {
            return { acao: 'Normal', motivo: 'Consumo dentro do esperado' };
        }
    }
};