import React from 'react';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Splash from './pages/Splash';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Splash />}/> 
          <Route path="/accueil" element={<Home />}/> 
        </Routes>
    </Router>
  );
}

export default App;
