import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/index';
import LoginAdm from './pages/loginAdm/index';
import UserChat from './pages/userChat/index';
import AdminController from './pages/adminController/index';
import Selection from './pages/selection/index';
import ListUsers from './pages/listUsers/index';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Selection}></Route>

                <Route path="/ChatHome" component={Home}></Route>
                <Route path="/AdminArea" component={LoginAdm}></Route>
                <Route path="/UserChat" component={UserChat}></Route>
                <Route path="/AdminController" component={AdminController}></Route>
                <Route path="/ListUsers" component={ListUsers}></Route>

               
                
            </Switch>
        </BrowserRouter>
    );
}