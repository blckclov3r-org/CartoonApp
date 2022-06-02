import './App.css';
import NavHeader from './components/NavHeader';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import RickMorty from './components/RickMorty/Rick&Morty';
import Footer from './components/Footer';
import Simpson from './components/SImpson/Simpson';
import Cartoon from './components/Futarama/Futarama';
import NotFound from './components/NotFound';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
          <NavHeader />
          <div className='main'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Futarama" element={<Cartoon />} />
                  <Route path="/Rick&Morty" element={<RickMorty />} />
                  <Route path="/Simpson" element={<Simpson />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
