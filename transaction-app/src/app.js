import React from 'react';
import { Switch, BrowserRouter} from 'react-router-dom';

import ToastNotify from "./shared/toast/toast.js";
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import NotFound from "./containner/NotFound";
import AuthGuard from "./containner/AuthGuard";
import Layout from "./page/Layout";
import Login from "./page/login/login";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <GuardProvider guards={[AuthGuard]} error={NotFound}>
                    <Switch>
                        <GuardedRoute path="/login" exact meta={{ auth: false }} component={Login} />
                        <GuardedRoute path="/error" exact meta={{ auth: false }} component={NotFound} />
                        <GuardedRoute path="/" meta={{ auth: true }} render={props => <Layout {...props} />} />
                    </Switch>
                </GuardProvider>
                <ToastNotify/>
            </BrowserRouter>
        </div>
    );
}

