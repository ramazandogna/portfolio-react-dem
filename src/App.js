import './App.css';

import About from './components/Body/About';
import Header from './components/Header/Header';
import Presentation from './components/Body/Presentation';

function App() {
   return (
      <div>
         <Header />
         <Presentation />
         <About />
      </div>
   );
}

export default App;
