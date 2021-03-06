import { Request, Response } from 'express';
import SearchService from '../services/SearchService';

class SearchController {
    // Método para executar o serviço do 'search'
    public async get(request: Request, response: Response): Promise<Response> {
        // Recuperando o nome e o email do destinatário junto do parâmetro de busca no corpo da requisição
        const { name, email, search } = request.body;

        // Instanciando e executando o serviço para realizar o 'search'
        const searchService = new SearchService(); 

        await searchService.execute({
            name,
            email,
            search,
        });

        // Retornando uma responta
        return response.json({ message: 'Busca realizada com sucesso!' });
    }
}

export default SearchController;
