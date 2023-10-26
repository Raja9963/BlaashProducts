import React from 'react';
import Fashion from './Components/screen1';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Fashion2 from './Components/screen2';


function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Fashion />} />
        <Route path='/screen' element={<Fashion2/>} />
      </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
