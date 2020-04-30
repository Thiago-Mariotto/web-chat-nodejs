const express = require('express');
const UserController = require('../src/controllers/userController'); 
const AdminController = require('../src/controllers/adminController');
const MessageController = require('../src/controllers/messageController');

const ListUsersController = require('../src/controllers/listUsersController');

const routes = express.Router();

//DESAFIOS 1 E 2
routes.post('/adminLogin', AdminController.logon);
routes.post('/adminCreate', AdminController.create);
routes.get('/adminList', AdminController.listAdmins);

routes.post('/userLogin', UserController.logon);

routes.post('/messageSend', MessageController.create);
routes.get('/messageList', MessageController.index);

routes.get('/messageUserName/:user', MessageController.user);
routes.get('/messageDate/:date', MessageController.findDate);
routes.delete('/messageDelete/:id', MessageController.delete);

//DESAFIOS 2 E 3
routes.get('/listUsers', ListUsersController.index);

module.exports = routes;