import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './Layout/Layout';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<h1>Home</h1>}></Route>
          <Route path='/about' element={<h1>About</h1>}></Route>
          <Route path='/blog' element={<h1>Blog</h1>}></Route>
          <Route path='/*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
