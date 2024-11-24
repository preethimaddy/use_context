import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Podcasts from './components/Podcasts';
import Recommendations from './components/Recommendations';
import { UserContext } from './context/UserContext';
import Home from './components/Home';
import './index.css';
function App() {
  return (
   <>
    <h1 className='text-3xl text-center py-6 my-2'>Use-context Basics</h1>
    <Router>
      <UserContext.Provider value="Preethi">
      <Routes>
      <Route path="/"  element={<Home />}/>
        <Route path="/dashboard"  element={<Dashboard />}/>
        <Route path="/podcasts"  element={<Podcasts />}/>
        <Route path="/recommendations"  element={<Recommendations />}/>
      </Routes>
      </UserContext.Provider>
    
    </Router>
    
    
    </>

  );
}

export default App;
