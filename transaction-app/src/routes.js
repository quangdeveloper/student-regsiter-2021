import React from 'react';
import User from './page/user-page/list/index';
import Role from './page/role/list/index';

const routes = [
    {path: '/user', name: 'UserManager', component: User, meta: {auth: true}},
    {path: '/role', name: 'RoleManager', component: Role, meta: {auth: true}},
]

export default routes;
