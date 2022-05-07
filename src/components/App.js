import React from 'react';
import { NavBar } from './nav';
import { MapScreen } from './map';
import { LearnScreen } from './learn';
import { FaqScreen } from './faq';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <main>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<MapScreen />}></Route>
          <Route path="/faq" element={<FaqScreen />}></Route>
          <Route path="/learn" element={<LearnScreen />}></Route>
          <Route path="*" element={<MapScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;