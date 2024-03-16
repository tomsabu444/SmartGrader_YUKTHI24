import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
    <Route path="/" element={<Login/>} />
  </Route>
</Routes>
</BrowserRouter>

  )
}

export default App