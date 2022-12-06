import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Presentation />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
