import './App.css';
import React, { useState } from 'react';
import Counter from './components/counter';
import Countries from './components/countries';
import Graph from './components/graph';
import Global from './components/global';
import Header from './Layout/header';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

 
  return (
    <div className="App">
<BrowserRouter>
<Header />
<Routes>
<Route path = '/' element={<Global />} />
<Route path = '/countries' element={<Countries />} />
<Route path = '/graph' element={<Graph />} />
 <Route path = '/counter' element={<Counter />} />
</Routes>
</BrowserRouter>



    </div>
  );
}

export default App;
