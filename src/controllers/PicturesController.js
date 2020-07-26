const connection = require('../database/connection');
module.exports = {
    
    async index(request, response){
        const pictures = await connection('pictures').select('*');
        return response.json(pictures);
    },
    
    async create(request, response){
        const {filename, category_id, author_id} = request.body;
    
        await connection('pictures').insert({
            filename,
            category_id,
            author_id
        });
    
        return response.json({filename});
    }
};