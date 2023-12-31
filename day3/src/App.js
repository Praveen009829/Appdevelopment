import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


function App () {
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Register />} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
