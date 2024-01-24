
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import BackendPage from './pages/backenddeveloper'
import ApplicationPage from './pages/Application'
import ExperiencePage from './pages/Experience'
import './App.css'
import Navbar from './components/Navbar'
import InstructionsPage from './pages/InstructionsPage'
import HistoryPage from "./pages/HistoryPage"
import SearchPage from "./pages/SearchPage"

import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const {user} = useAuthContext()
  


  return (
    <div>
    <BrowserRouter>
      <Navbar/> 
      <div className='pages '>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={!user?<SignupPage/>: <DashboardPage/>}/>
          <Route path='/dashboard/instruction' element={ <InstructionsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/backend' element={<BackendPage/>}/>
          <Route path='/application' element={<ApplicationPage/>}/>
          <Route path='/experience' element={<ExperiencePage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={!user?<LoginPage/>:< Navigate to='/dashboard'/>}/>
          <Route path='/history' element={!user?<SignupPage/>: <HistoryPage/>}/>
          <Route path='/search' element={!user?<SignupPage/>: <SearchPage/>}/>
          
        </Routes>
      </div>
    </BrowserRouter> 
    </div>
  )
}

export default App
