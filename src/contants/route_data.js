import Landing from '../pages/Landing';
import About from '../pages/About';
import MoreDetails from '../pages/MoreDetails';

const ROUTE_DATA = {
    "/": {
        "component": Landing,
        "label": "Home",
    },
    "/about": {
        "component": About,
        "label": "About",
    },
    "/more": {
        "component": MoreDetails,
        "label": "More Details",
    },
}

export default ROUTE_DATA;