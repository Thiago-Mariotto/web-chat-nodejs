const connection = require('../database/connection');

module.exports = {
    async logon(request, response) {

        try {
            const { username, password } = request.body;
            console.log(username, password);
            
            if(username != '' && password != ''){
                const user = await connection('admin')
                    .where('username', '=', username) 
                    .select('name', 'password')
                    .first();

                    if(user && password == user.password){
                        return response.json(user);
                    }else {
                        return response.status(401).json({ error: "Não autorizado." });
                    }
            }else {
                return response.status(406).json({ error: "Campos vazios." });
            }


        } catch (error) {
            return response.status(400).json({ error: "Falha na requisão, tente novamente mais tarde." });
        }
        
    },



    async create(request, response) {
        const { username, name, password} = request.body;

        await connection('admin').insert({
            username,
            name,
            password
        });

        return response.json({ name });
    },


    async listAdmins(request, response) {
        const admins = await connection('admin').select('*');

        return response.json(admins);
    },
        
}
