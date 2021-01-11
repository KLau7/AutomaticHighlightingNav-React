// import logo from './logo.svg';
import { forwardRef, useContext, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

import { navContext } from '../components/NavBar';

const Landing = () => {


  return (
    <>
      <section id="first">
        <h1>Landing page</h1>
      </section>
      <section id="second">
        <button>
          <Link to="/more">Next</Link>
        </button>
      </section>
      <section id="third">
        <h3>More stuff</h3>
      </section>
    </>
  );
}

export default Landing;
