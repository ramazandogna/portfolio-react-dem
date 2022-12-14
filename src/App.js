import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Skills from './components/Skills';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/about" element={<About />} />
               <Route path="/skills" element={<Skills />} />
               <Route path="/presentation" element={<Presentation />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
