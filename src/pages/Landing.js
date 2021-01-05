// import logo from './logo.svg';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

function Landing() {

  const sectionRef = useRef(null);

  const getPos = () => {
    console.log(sectionRef.current.getBoundingClientRect());
  }

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
        <section id="third" ref={sectionRef}>
          <h3>More stuff</h3>
          <button onClick={getPos}>Push me</button>
        </section>
      </>
  );
}

export default Landing;
