import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = (props) => {

    const SITE_DATA = {
        "/": "Home",
        "/more": "More",
    }

    return (
        <nav>
            {Object.keys(SITE_DATA).map(key => {
                return (
                    <div className='navPageTabContainer' key={key}>
                        <Link to={key} className={`page ${ props.pathname === key ? 'active' : '' }`}>{ SITE_DATA[key] }</Link>
                        {props.pathname === key &&
                        <div className='anchorContainer'>
                            {props.sections.map((section) => {
                                return (
                                    <a key={section} href={`#${section}`} className={`anchor ${ props.current === (`#${section}`) ? 'active' : ''}`}>{section}</a>
                                )
                            })}
                        </div>
                        }
                    </div>
                )
            })}
        </nav>
    )
}


export default Nav;