import { useState, useEffect, useContext } from 'react';
import { __RouterContext } from 'react-router';

import { queuedThrottle } from './queuedThrottle';

export const useEventListener = (element, event, handler, throttle = 0) => {
    useEffect(() => {
        const throttledHandler = queuedThrottle(handler, throttle);
        element.addEventListener(event, throttledHandler);
        return () => element.removeEventListener(event, throttledHandler);
    }, [element, event, handler, throttle]);
}


// Must be used inside Router
export const useLocation = () => {
    const [, setUpdate] = useState(null);
    
    const routerContext = useContext(__RouterContext);
    useEffect(() => {
        const forceUpdate = () => { setUpdate( {} ) };
        return routerContext.history.listen(forceUpdate);
    }, [ routerContext ]);

    return routerContext;
}