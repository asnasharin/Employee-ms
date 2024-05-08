import './App.css'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import SignupPage from './components/Signup'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Navigate to="/login" /> } />
   </Routes>
   </BrowserRouter>
  )
}

export default App
