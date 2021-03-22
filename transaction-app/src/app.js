import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from "./containner/header";
import Aside from "./containner/aside";
import ToastNotify from "./shared/toast/toast.js";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Login = React.lazy(() => import('./page/login/login'));
const TransactionList = React.lazy(() => import('./page/transaction/list/transaction-list'));
const DebtFeeList = React.lazy(() => import('./page/user-page/list'));

export default function App() {
    return (
        <div>
            <Header/>
            <Aside/>
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route exact path="/login" name="Login" component={Login}/>
                        <Route exact path="/debt-fee" name="DebtFee" component={DebtFeeList}/>
                        <Route path="/transaction" name="Transaction" component={TransactionList}/>
                    </Switch>
                </React.Suspense>
            </HashRouter>
            <ToastNotify/>
        </div>
    );
}

