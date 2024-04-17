import './App.css';

import Cards from './components/Cards';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Section1 from './components/Section1';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Sections />
      <Cards />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
