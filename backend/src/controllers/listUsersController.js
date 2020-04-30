const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var names = [];
            
            for(var id = 0; id < 117; id++){
                for (var i = 0; i < 5; i++){
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                
                names[id] = {
                    id ,
                    text
                }
                text = '';
            }

            return response.json(names)
    }    
}