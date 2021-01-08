import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import AppRouter from './AppRouter';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';

function App() {

  return (
    <Router>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <AppRouter></AppRouter>
      </main>
    </Router>
  );
}

export default App;
