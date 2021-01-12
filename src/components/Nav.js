import { Link } from 'react-router-dom';

import './Nav.scss';

import ROUTE_DATA from '../contants/route_data';

const Nav = (props) => {

    return (
        <nav>
            {Object.keys(ROUTE_DATA).map(key => {
                return (
                    <div className='navPageTabContainer' key={key}>
                        <Link to={key} className={`nav-btn page-btn ${ props.pathname === key ? 'active' : '' }`}>{ ROUTE_DATA[key].label }</Link>
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