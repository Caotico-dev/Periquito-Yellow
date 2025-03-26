import Home from "./components/Home.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PageAlimentacion from './components/PageAlimentacion.jsx';
import PageAlojamiento from './components/PageAlojamiento.jsx';
import PageCalculadora from './components/PageCalculadora.jsx';
import PageSaludeHigiene from './components/PageSaludeHigiene.jsx';
import PageEnfermedades from './components/PageEnfermedades.jsx';
import PageDominante from './components/PageDominante.jsx';
import PageRecesivas from './components/PageRecesivas.jsx';
import PageLigadasAlSexo from './components/PageLigadasAlSexo.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <header className="header">
          <h1 className="header-title">
            Periquito Yellow
          </h1>
          <nav className="nav">
            <ul className="nav-list">
              <li className="list-item">
                <Link className="item" to="/Periquito-Yellow/home">
                  Home
                </Link>
              </li>
              <li className="list-item">
                <a href="#" className="item-special">Mutaciones</a>
                <ul className="subnav-list">
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/Dominantes">Dominantes</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/Recesivas">Recesivas</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/LigadasAlSexo">Ligadas al Sexo</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/Calculadora">Calculadora de mutaciones</Link>
                  </li>
                </ul>
              </li>
              <li className="list-item">
                <a href="#" className="item-special">Cuidados</a>
                <ul className="subnav-list">
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/Alimentacion">Alimentacion</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/Alojamiento">Alojamiento</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="/Periquito-Yellow/SaludeHigiene">Salud e Higiene</Link>
                  </li>
                  <li className="sublist-item">
                    <Link className="subitem" to="Periquito-Yellow/Enfermedades">Enfermedades</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      </>
      <Routes>
        <Route path="/Periquito-Yellow/home" element={<Home />} />
        <Route path="/Periquito-Yellow/Dominantes" element={<PageDominante/>} />
        <Route path="/Periquito-Yellow/Recesivas" element={<PageRecesivas/>} />
        <Route path="/Periquito-Yellow/LigadasAlSexo" element={<PageLigadasAlSexo/>} />
        <Route path="/Periquito-Yellow/Enfermedades" element={<PageEnfermedades/>} />
        <Route path="/Periquito-Yellow/SaludeHigiene" element={<PageSaludeHigiene/>} />
        <Route path="/Periquito-Yellow/Alimentacion" element={<PageAlimentacion/>} />
        <Route path="/Periquito-Yellow/Calculadora" element={<PageCalculadora/>} />
        <Route path="/Periquito-Yellow/Alojamiento" element={<PageAlojamiento/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
