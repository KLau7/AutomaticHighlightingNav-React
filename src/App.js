import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import AppRouter from './AppRouter';
import NavBar from './components/NavBar';

function App() {

  return (
    <Router>
      <NavBar>
        <AppRouter></AppRouter>
      </NavBar>
    </Router>
  );
}

export default App;
