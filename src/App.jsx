import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
// Rutas
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Favorites } from './pages/Favorites/Favorites'
import { Details } from './components/Detail/Details'

// Componentes
import { NavBar } from './components/NavBar/NavBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App () {
  const location = useLocation()
  const isAccess = useSelector((state) => state.access)
  const navigate = useNavigate()
  useEffect(() => {
    !isAccess && navigate('/')
  }, [])

  return (
    <>
      {
        location.pathname !== '/' &&
          <NavBar />
      }
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/character/:id' element={<Details />} />
        </Routes>
      </div>
    </>
  )
}

export default App
