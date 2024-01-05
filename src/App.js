
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Biblioteca from './Pages/Biblioteca/Biblioteca';
import Cita from './Pages/Cita/Cita';
import Inicio from './Pages/Inicio/Inicio';
import NuevoLibro from './Pages/NuevoLibro/NuevoLibro';
import Perfil from './Pages/Perfil/Perfil';
import Principal from './Pages/Principal/Principal';
import Registro from './Pages/Registro/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/biblioteca' element={<Biblioteca/>}/>
        <Route path='/nuevolibro' element={<NuevoLibro/>}/>
        <Route path='/cita' element={<Cita/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
