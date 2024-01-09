import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './Layout/Layout';
import { CtzComp } from './CtzComp/CtzComp';
import { CtzVta } from './CtzVta/CtzVta';
import { SiDo } from './SiDo/SiDo';
import { Follow } from './Follow/Follow';
import { Table } from './Tables/Tables';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Layout />
        <Routes>
          <Route path='/ctzcomp' element={<CtzComp />}></Route>
          <Route path='/ctzvta' element={<CtzVta />}></Route>
          <Route path='/sido' element={<SiDo />}></Route>
          <Route path='/follow' element={<Follow />}></Route>
          <Route path='/tables/:table' element={<Table />}></Route>
          <Route path='/*' element={<h1>Error 404</h1>}></Route>
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
