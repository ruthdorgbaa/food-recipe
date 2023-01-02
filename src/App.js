import React from 'react';
import Home from './component/home/home';
import Menu from './component/Menu/menu'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>

  );
  
}

export default App;
