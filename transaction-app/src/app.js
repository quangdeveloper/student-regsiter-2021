import React, {useEffect, useState} from 'react';
import Layout from "./page/Layout";
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import AuthGuard from "./containner/AuthGuard";
import Login from "./page/login/login";


export default function App() {
    return( <BrowserRouter>
        <GuardProvider guards={[AuthGuard]} >
            <Switch>
                <GuardedRoute path="/login" exact meta={{ auth: false }} component={Login} />
                <GuardedRoute path="/" meta={{ auth: true }} render={props => <Layout {...props} />} />
            </Switch>
        </GuardProvider>
    </BrowserRouter>
    )
}
