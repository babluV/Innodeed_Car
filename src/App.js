
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cars from './docs/cars';
import Errors from './docs/Errors';
import Learn from './docs/Learn';
import Shop from './docs/Shop';

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Cars/>} /> 
    <Route path ="/Learn/:id" element ={<Learn/>}/>
    <Route path = "/Shop/:id" element = {<Shop/>}/>
    <Route element ={<Errors/>}/>
    </Routes>
    
    </BrowserRouter>
  )
   ;
}

export default App;
