import React from 'react';
import {Route} from "react-router-dom";

import Tabs from "../tabs";

const RouteTabs = ({children, routes, ...rest}) => {
    return (
        <Tabs tabs={routes} {...rest}>
            {routes.map((route, i) => (
                <Route key={i} {...route.routeInfo}/>
            ))}
        </Tabs>
    );
};

export default RouteTabs;