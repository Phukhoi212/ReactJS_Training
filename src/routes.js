import React from 'react';
import Home from './containers/Home/index';
import Detail from './containers/Detail/index'
import SignIn from './components/Login/Login'



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },

    {
        path : '/detail/:id',
        exact : true,
        main : () => <Detail />
    },

    {
        path: '/login',
        exact: true,
        main: () => <SignIn />
    }

];

export default routes;