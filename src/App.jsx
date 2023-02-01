import { Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
// Rutas
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Favorites } from './pages/Favorites/Favorites'
import { Details } from './components/Detail/Details'

// Componentes
import { NavBar } from './components/NavBar/NavBar'

function App () {
  const location = useLocation()

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
