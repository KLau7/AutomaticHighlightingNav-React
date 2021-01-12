import { Switch, Route } from 'react-router-dom';

import ROUTE_DATA from './contants/route_data';

function AppRouter() {

    const routeComponents = Object.keys(ROUTE_DATA).map((key) => (
        <Route exact path={ key } component={ ROUTE_DATA[key].component } key={key} />
    ));

    return (
        <Switch>
            {routeComponents}
        </Switch>
    )
}

export default AppRouter;