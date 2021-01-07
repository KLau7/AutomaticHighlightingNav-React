import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useHistory, __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const Navbar = () => {

    const queuedThrottle = (fn, timeout = 500) => {
        var queue = null;
        var timer = null;
            
        return function () {
            if (!timer) {
                timer = setTimeout(() => {
                    queue && queue(...arguments);
                    timer = null;
                    queue = null;
                }, timeout);
                fn(...arguments);
            }else {
                queue = () => {
                    fn(...arguments);
                }
            }
        }
    }


    const useLocation = () => {
        const [, setUpdate] = useState(null);
        
        const routerContext = useContext(__RouterContext);
        useEffect(() => {
            const forceUpdate = () => { setUpdate( {} ) };
            return routerContext.history.listen(forceUpdate);
        }, [ routerContext ]);

        return routerContext;
    }

    const { location } = useLocation();


    // Custom hook
    const useEventListener = (element, event, handler) => {
        useEffect(() => {
            const throttledHandler = queuedThrottle(handler, 100);
            element.addEventListener(event, throttledHandler);
            return () => element.removeEventListener(event, throttledHandler);
        }, [element, event, handler]);
    }
    

    // Listen on viewport height
    const [ viewportHeight, setViewportHeight ] = useState(window.innerHeight);
    const updateViewportHeight = () => {
        setViewportHeight(window.innerHeight);
    }
    useEventListener(window, 'resize', updateViewportHeight);


    // Listen on scroll position
    const [ currentScroll, setCurrentScroll] = useState(0);
    const updateCurrentScroll = useCallback((e) => {
        setCurrentScroll(e.target.documentElement.scrollTop);
    }, []);
    
    const [ currentSection, setCurrentSection] = useState(1); 
    useEffect(() => {
        const sectionNum = Math.floor((currentScroll / viewportHeight) + 0.5)
        setCurrentSection(sectionNum);
    }, [currentScroll, viewportHeight]);

    const history = useHistory();
    useEffect(() => {
        const sectionNames = ['first', 'second', 'third'];
        history.push({
            pathname: location.pathname,
            hash: `#${sectionNames[currentSection]}`
        })
    }, [currentSection]);

    useEventListener(window, 'scroll', updateCurrentScroll);


    return (
        <nav>
            <Link to="/" className={`page ${ location.pathname === '/' ? 'active' : '' }`}>Home</Link>
            { location.pathname === '/' &&
                <div className='anchorContainer'>
                    <a href='#first' className={`anchor ${ location.hash === '#first' ? 'active' : '' }`}>First</a>
                    <a href='#second' className={`anchor ${ location.hash === '#second' ? 'active' : '' }`}>Second</a>
                    <a href='#third' className={`anchor ${ location.hash === '#third' ? 'active' : '' }`}>Third</a>
                </div>
            }
            <Link to="/more" className={`page ${ location.pathname === '/more' ? 'active' : '' }`}>More</Link>
            { location.pathname === '/more' &&
                <div className='anchorContainer'>
                    <a href='#first' className={`anchor ${ location.hash === '#first' ? 'active' : '' }`}>First</a>
                    <a href='#second' className={`anchor ${ location.hash === '#second' ? 'active' : '' }`}>Second</a>
                </div>
            }
        </nav>
    )
}

export default Navbar;