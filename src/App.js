
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
   
    <Router>
      
      <Navbar />

      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Contato />} />
        <Route path="/contato" element={<Empresa />} />
          

      </Routes>
      <Footer />
      
    </Router>

   
    
    
  );
}


