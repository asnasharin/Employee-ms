import './App.css'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import SignupPage from './components/Signup'
import Dashboard from './components/Dashboard'
import Employee from './components/Employee'
import Category from './components/Category'
import Profile from './components/Profile'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/' element={<Navigate to="/login" /> } />
    <Route path='/employee' element={<Employee />} />
    <Route path='/category' element={<Category />} />
    <Route path='/profile' element={<Profile />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
