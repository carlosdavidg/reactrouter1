import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './views/Contacto';
import Navigationbar from './components/Navigationbar';
import Home from './views/Home'


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navigationbar/>


        <Routes>

          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>


        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
