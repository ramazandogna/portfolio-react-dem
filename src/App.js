import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Presentation />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
