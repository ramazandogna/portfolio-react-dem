import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>{/* <Route path="/" element={<} /> */}</Routes>
         </Router>
      </div>
   );
}

export default App;
