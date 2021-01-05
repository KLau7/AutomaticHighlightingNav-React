import React, { useState, useContext, useEffect } from 'react';
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import './NavBar.scss';

function Navbar() {

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

    const [ currentSection, setCurrentSection] = useState(1); 

    // Custom hook
    const useEventListener = (element, event, handler) => {
        useEffect(() => {
            element.addEventListener(event, handler);
            return () => element.removeEventListener(event, handler);
        });
    }

    // Listen on viewport height
    const [ viewportHeight, setViewportHeight ] = useState(window.innerHeight);
    const updateViewportHeight = () => {
        setViewportHeight(window.innerHeight);
    }
    useEventListener(window, 'resize', updateViewportHeight);
    
    // Listen on scroll position
    const [ currentScroll, setCurrentScroll] = useState(0);
    const updateCurrentScroll = _.throttle((e) => {
            setCurrentScroll(e.target.documentElement.scrollTop);
            setCurrentSection(parseInt(currentScroll / viewportHeight) + 1)
            console.log(currentSection);
    }, 2000);
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