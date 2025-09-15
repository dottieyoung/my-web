import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //SPA, client-side routing
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
