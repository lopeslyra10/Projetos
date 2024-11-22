import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Ajuste para a URL correta do seu backend
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 5000 // 5 segundos de timeout
});

// Interceptor para logs
api.interceptors.request.use(request => {
    console.log('Fazendo requisição para:', request.url);
    return request;
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // O servidor respondeu com um status de erro
            console.error('Erro de resposta:', error.response.status, error.response.data);
        } else if (error.request) {
            // A requisição foi feita mas não houve resposta
            console.error('Sem resposta do servidor');
        } else {
            // Algo aconteceu na configuração da requisição
            console.error('Erro na requisição:', error.message);
        }
        return Promise.reject(error);
    }
);