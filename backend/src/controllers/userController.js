const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const username = request.body;

        const user = await connection('users')
            .where('username', '=', username)
            .select('username')
            .first();

    },

    async logon(request, response) {

        try {
            const { username } = request.body;

            if(username.length < 4){
                return response.status(406).json({ error: "Username deve possuir ao menos 4 caracteres." });
            }else{
                return response.json(username);
            }
            
        } catch (error) {
            return response.status(400).json({ error: "Falha na requisão, tente novamente mais tarde." });
        }
        
    },

}