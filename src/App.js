import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import Footer from './component/Footer/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
     
        <main className="route-content bg-white">
             <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
