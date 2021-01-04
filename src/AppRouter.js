import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import MoreDetails from './pages/MoreDetails';

function AppRouter() {
    return (
        <Switch>
            <Route path="/" exact={true} component={ Landing } />
            <Route path="/more" exact={true} component={ MoreDetails } />
        </Switch>
    )
}

export default AppRouter;