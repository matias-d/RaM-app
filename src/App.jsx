import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
// Rutas
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Favorites } from './pages/Favorites/Favorites'
import { Details } from './components/Detail/Details'
import { AboutMe } from './pages/AboutMe/AboutMe'

// Componentes
import { NavBar } from './components/NavBar/NavBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App () {
  const location = useLocation()
  const isAccess = useSelector((state) => state.access)
  const navigate = useNavigate()
  useEffect(() => {
    !isAccess && navigate('/RaM-app/')
  }, [])

  return (
    <>
      {
        location.pathname !== '/RaM-app/' &&
          <NavBar />
      }
      <div className='App'>
        <Routes>
          <Route path='/RaM-app/' element={<Login />} />
          <Route path='/RaM-app/home' element={<Home />} />
          <Route path='/RaM-app/about' element={<AboutMe />} />
          <Route path='/RaM-app/favorites' element={<Favorites />} />
          <Route path='/RaM-app/character/:id' element={<Details />} />
          <Route path='*' element={<Navigate to='/RaM-app/home' />} />
        </Routes>
      </div>
    </>
  )
}

export default App
