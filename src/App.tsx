import './App.css'
import { Button } from './components/Button'
import { Gallery } from './components/Gallery'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/Home/StateExample'
import { Homes } from './pages/Homes'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Agenda } from './pages/Agenda'
import { CssBaseline } from '@mui/material'



function App() {
  return (
    <CssBaseline>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homes/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Agenda" element={<Agenda/>}/>

          </Routes>
          <NavBarMenu/>
       </BrowserRouter>
       
    </>
  )
}

export default App
