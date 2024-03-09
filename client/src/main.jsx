import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './lib/Home';
import Dashboard from './lib/Dashboard';
import Assignments from './lib/Assignments';
import Timers from './lib/Timers';
import Forums from './lib/Forums';
import CalculateGrade from './lib/CalculateGrade';

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/assignments" element={<Assignments/>}/>
        <Route path="/timers" element={<Timers/>}/>
        <Route path="/forums" element={<Forums/>}/>
        <Route path="/calculateGrade" element={<CalculateGrade/>}/>

        <Route path="/auth/google"/>

      </Routes>
    </BrowserRouter>
  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);