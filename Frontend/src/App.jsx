import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Start from './Pages/Start';
import Scan_Score from './Pages/Scan_Score';
import StudentMarks from './Pages/StudentMarks';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
  <Route path="/" element={<Start/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/scan-score" element={<Scan_Score/>} />
    <Route exact path="/student-marks" element={<StudentMarks />} />
  </Route>
</Routes>
</BrowserRouter>

  )
}

export default App