import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import AppRouter from './AppRouter';
import PageContainer from './container/PageContainer';

function App() {

  return (
    <Router>
      <PageContainer>
        <AppRouter></AppRouter>
      </PageContainer>
    </Router>
  );
}

export default App;
