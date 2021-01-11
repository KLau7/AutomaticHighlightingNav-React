import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


import { useEventListener, useLocation } from '../utils/customHooks';

import './NavBar.scss';



const Navbar = (props) => {
    
    // Listen on url
    const { location } = useLocation();

    const [sectionNames, setSectionNames] = useState([]);
    
    const history = useHistory();
    
    const ref = useRef(null);
    
    const hashHandler = (id) => {
        history.push({ hash: `#${id}` });
    }

    const getSectionNodes = () => {
        const nodes = [];
        ref.current && ref.current.childNodes.forEach(node => { 
            node.localName === 'section' && nodes.push(node); 
        });
        return nodes;
    }

    const getSectionNames = () => {
        console.log('getting section names');
        let names = [];
        getSectionNodes().forEach(node => { names.push(node.id); });
        setSectionNames(names);
    }

    const getCurrentSection = () => {
        getSectionNodes().forEach(node => {
            const scrollMid = window.scrollY + (window.innerHeight / 2);
            if (scrollMid >= node.offsetTop && scrollMid < node.offsetTop + node.clientHeight) {
                hashHandler(node.id);
            }
        })
    }

    useEffect(() => {
        getSectionNames();
        getCurrentSection();
    }, [ location.pathname, ref ])

    useEventListener(window, 'scroll', getCurrentSection, 100);
    useEventListener(window, 'resize', getCurrentSection, 300);

    return (
        <>
            <header>
                <nav>
                    <Link to="/" className={`page ${ location.pathname === '/' ? 'active' : '' }`}>Home</Link>
                    { location.pathname === '/' &&
                        <div className='anchorContainer'>
                            {sectionNames.map((section) => {
                                return (
                                    <a key={section} href={`#${section}`} className={`anchor ${ location.hash === (`#${section}`) ? 'active' : ''}`}>{section}</a>
                                )
                            })}
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
            </header>
            <main ref={ref}>
                {props.children}
            </main>
        </>
    )
}


export default Navbar;