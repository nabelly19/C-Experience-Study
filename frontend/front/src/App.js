import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

//Pages
import ListPage from './pages/ListItemPage';
import ViewItemPage from './pages/ViewItemPage';


//Components
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path='/detalhes' element={<ViewItemPage/>} />
      </Routes>
    </>
  );
}

export default App;
