import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    
    if(request.method === 'POST') {
        const TOKEN = 'a3c6e4717f3c0e9080844ee5e574d4';
        const client = new SiteClient(TOKEN);
    
        
        const registroCriado = await client.items.create({
            itemType: "972648", // ID do model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/dan-naoki.png",
            // creatorSlug: "dan-naoki"
        })
    
        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }
    
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}