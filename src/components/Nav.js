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
                        <Link to={key} className={`nav-btn page-btn ${ props.pathname === key ? 'active' : '' }`}>{ SITE_DATA[key] }</Link>
                        {props.pathname === key &&
                        <div className='anchorContainer'>
                            {props.sections.map((section) => {
                                return (
                                    <button key={section} onClick={() => props.scrollFunction(section)} className={`nav-btn anchor-btn ${ props.current === (`#${section}`) ? 'active' : ''}`}>{section}</button>
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