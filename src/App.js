import './App.css';

import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Presentation from './components/Presentation.jsx';
import Skills from './components/Skills.jsx';

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
