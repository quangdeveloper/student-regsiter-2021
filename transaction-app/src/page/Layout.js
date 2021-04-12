import Header from "../containner/header";
import Aside from "../containner/aside";
import React from "react";
import {
    Route,
    Switch
} from 'react-router-dom'
import ToastNotify from "../shared/toast/toast";
import routes from "../routes";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Aside {...props}/>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            meta={route.meta}
                            name={route.name}
                            render={props => (
                                <route.component {...props} />
                            )} />
                    ) : (loading);
                })}
            </Switch>
            <ToastNotify/>
        </div>
    )
}
export default Layout;
