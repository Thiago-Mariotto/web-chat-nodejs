const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const { message, username } = request.body;

        await connection('messages').insert({
            username,
            message,
            
        });

        return response.json({ username, message});

    },

    async index(request, response){

        const messages = await connection('messages').select('*').orderBy('created_at', 'asc'); 

        return response.json(messages);
    },

    async user(request, response){
        const { user } = request.params;
        console.log(request.params);
        
        const message = await connection('messages')
            .where('username', '=', user)
            .select('*');

        return response.json(message);
    },

    async findDate(request, response){

        const { date } = request.params;

        console.log(date);

        const message = await connection('messages')
            .where('created_at', 'like', date+'%' )
            .select('*');

        return response.json(message);
    },

    async delete(request, response){
        const { id } = request.params;
        console.log(id);

        await connection('messages').where('id', id).delete();
        return response.status(204).send();
    }

}