import './App.css';

import About from './components/Body/About';
import Footer from './components/Body/Footer/Footer';
import Presentation from './components/Body/Presentation';
import Skills from './components/Body/Skills/Skills';

function App() {
   return (
      <div>
         <Presentation />
         <About />
         <Skills />
         <Footer />
      </div>
   );
}

export default App;
