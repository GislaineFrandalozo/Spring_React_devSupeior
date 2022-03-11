import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';
import RoutesApp from './routes';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;
