// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './Landing.scss';

function Landing() {
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
      </>
  );
}

export default Landing;
