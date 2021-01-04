import React, { useState, useContext, useEffect } from 'react';
import { useForceUpdate } from 'use-force-update';
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';

import './NavBar.scss';

function Navbar() {

    const useReactRouter = () => {
        const forceUpdate = useForceUpdate();
        const routerContext = useContext(__RouterContext);
        useEffect(() => {
            return routerContext.history.listen(forceUpdate);
        }, [ routerContext ]);
        return routerContext;
    }

    const { location } = useContext(__RouterContext);

    return (
        <nav>
            <Link to="/" className='page'>Home</Link>
            { location.pathname === '/' &&
                <div className='anchorContainer'>
                    <a href='#first' className='anchor'>First</a>
                    <a href='#second' className='anchor'>Second</a>
                </div>
            }
            <Link to="/more" className='page'>More</Link>
            { location.pathname === '/more' &&
                <div className='anchorContainer'>
                    <a href='#first' className='anchor'>First</a>
                    <a href='#second' className='anchor'>Second</a>
                </div>
            }
        </nav>
    )
}

export default Navbar;