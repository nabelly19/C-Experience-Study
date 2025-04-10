import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

//Pages
import ListPage from './pages/ListItemPage';
import ViewItemPage from './pages/ViewItemPage';
import EditItemPage from './pages/EditItemPage';


//Components
import NavbarComponent from './components/NavbarComponent';
import CreateItemPage from './pages/CreateItemPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <>
      <NavbarComponent />
      <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path='/detalhes/:id' element={<ViewItemPage/>} />
        <Route path='/edit/:id' element={<EditItemPage/>} />
        <Route path='/criar' element={<CreateItemPage/>} />
      </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
