import './App.css';

import About from './components/Body/About';
import Presentation from './components/Body/Presentation';
import Skills from './components/Body/Skills/Skills';

function App() {
   return (
      <div>
         <Presentation />
         <About />
         <Skills />
      </div>
   );
}

export default App;
