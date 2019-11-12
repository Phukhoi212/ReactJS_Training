import React from 'react';
import Home from './containers/Home/index';
import Detail from './containers/Detail/index'



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

];

export default routes;