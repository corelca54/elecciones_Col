
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Detalle from './estadisticas/detalle';
import Home from './estadisticas/home';
import Informativa from './estadisticas/informativa';
import OriginalMapa from './estadisticas/original_mapa';
import Favoritos from './estadisticas/favoritos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <h1>Componentes Estadísticas</h1>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Link to="/">Home</Link>
        <Link to="/detalle">Detalle</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/original_mapa">Original Mapa</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original_mapa" element={<OriginalMapa />} />
      </Routes>
    </Router>
  );
}

export default App
