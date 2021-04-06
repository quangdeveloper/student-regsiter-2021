import React from 'react';
import Transaction from './page/transaction/list/transaction-list';
import User from './page/user-page/list/index';

const routes = [
    {path: '/user', name: 'UserManager', component: User, meta: {auth: true}},
    {path: '/transaction', name: 'tran', component: Transaction}
]

export default routes;
