
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Glavna from './Components/Glavna';
import Torcida from './Components/Torcida';
import Footer from './Components/Footer';
import Vukas from './Components/Vukas';
import Beara from './Components/Beara';
import Matosic from './Components/Matosic';
import Statistika from './Components/Statistika';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Router>
        <Routes>
          <Route path='/' element={<Glavna></Glavna>}></Route>
          <Route path='/torcida' element={<Torcida></Torcida>}></Route>
          <Route path='/vukas' element={<Vukas></Vukas>}></Route>
          <Route path='/beara'element={<Beara></Beara>}></Route>
          <Route path='/matosic' element={<Matosic></Matosic>}></Route>
          
        </Routes>
     </Router>
     <Footer></Footer>
      
     
    </div>
  );
}

export default App;


