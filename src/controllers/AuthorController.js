const connection = require('../database/connection');
module.exports = {
    
    async index(request, response){
        const authors = await connection('author').select('*');
        return response.json(authors);
    },
    
    async create(request, response){
        const {name} = request.body;
        console.log(name);
    
        await connection('author').insert({
            name,
        });
    
        return response.json({name});
    }
};