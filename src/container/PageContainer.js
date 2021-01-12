import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

import { useEventListener, useLocation } from '../utils/customHooks';

import Nav from '../components/Nav';


const PageContainer = (props) => {
    
    // Listen on url
    const { location } = useLocation();

    const [sectionNames, setSectionNames] = useState([]);
    
    const history = useHistory();
    
    const ref = useRef(null);
    

    // functions / handlers
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

    const getSectionNamesRef = useRef(null);
    getSectionNamesRef.current = () => {
        let names = [];
        getSectionNodes().forEach(node => { names.push(node.id); });
        return names;
    }

    const getCurrentSectionRef = useRef(null);
    getCurrentSectionRef.current = () => {
        getSectionNodes().forEach(node => {
            const scrollMid = window.scrollY + (window.innerHeight / 2);
            if (scrollMid >= node.offsetTop && scrollMid < node.offsetTop + node.clientHeight) {
                hashHandler(node.id);
            }
        })
    }


    // hooks
    useEffect(() => {
        setSectionNames(getSectionNamesRef.current());
        getCurrentSectionRef.current();
    }, [ location.pathname, ref, getSectionNamesRef, getCurrentSectionRef, setSectionNames ]);

    useEventListener(window, 'scroll', getCurrentSectionRef.current, 100);
    useEventListener(window, 'resize', getCurrentSectionRef.current, 300);

    // scroll function for nav bar, implemented to fix anchor tag fighting onscroll set hash
    const scrollFunction = (id) => {
        let offset;
        getSectionNodes().forEach(node => {
            node.id === id && (offset = node.offsetTop);
        })
        offset !== undefined && window.scrollTo(0, offset);
    }

    return (
        <>
            <header>
                <Nav current={ location.hash } sections={ sectionNames } pathname={ location.pathname } scrollFunction={scrollFunction} />
            </header>
            <main ref={ref}>
                {props.children}
            </main>
        </>
    )
}


export default PageContainer;