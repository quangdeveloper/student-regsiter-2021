import React from 'react';

const TransactionList = React.lazy(() => import('./page/transaction/list/transaction-list'));
const Login = React.lazy(() => import('./page/login/login'));
const DebtFeeList = React.lazy(() => import('./page/user-page/list'));

const routes = [
    {path: '/', exact: true, name: 'Login', component: Login},
    {path: '/transaction', name: 'TransactionList', component: TransactionList},
    {path: '/debt-fee', name: 'DebtFeeList', component: DebtFeeList}
]

export default routes;
