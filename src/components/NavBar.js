import React, { Children, useState, useEffect, useReducer, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getHash, getSectionNames } from '../store/selectors';
import { pushHash } from '../store/actions'

import { useEventListener, useLocation } from '../utils/customHooks';

import './NavBar.scss';
import Landing from '../pages/Landing';

// const Navbar = (props, { hash, pushHash }) => {
const Navbar = (props) => {
    
    // Listen on url
    const { location } = useLocation();
    
    const hashHandler = () => {
        const sectionNames = ['first', 'second', 'third'];

        const sectionNum = Math.floor((window.scrollY / window.innerHeight) + 0.5)
        let hashStr = `#${sectionNames[sectionNum]}`
        history.push({
            hash: hashStr
        })
        // pushHash({ hash: hashStr})
    }

    useEventListener(window, 'scroll', hashHandler, 100);
    useEventListener(window, 'resize', hashHandler, 100);

    const history = useHistory();
    useEffect(() => {
        hashHandler();
    // }, [history, pushHash]);
    }, [history]);

    return (
        <>
        <nav>
            <Link to="/#first" className={`page ${ location.pathname === '/' ? 'active' : '' }`}>Home</Link>
            { location.pathname === '/' &&
                <div className='anchorContainer'>
                    <a href='#first' className={`anchor ${ location.hash === '#first' ? 'active' : '' }`}>First</a>
                    <a href='#second' className={`anchor ${ location.hash === '#second' ? 'active' : '' }`}>Second</a>
                    <a href='#third' className={`anchor ${ location.hash === '#third' ? 'active' : '' }`}>Third</a>
                    {/* <button onClick={focusChild}>BUtton</button> */}
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
        </>
    )
}


const mapStateToProps = (state) => {

    return {
        hash: getHash(state),
        sectionNames: getSectionNames(state)
    };
}

export default Navbar;
// export default connect(mapStateToProps, { pushHash })(Navbar);