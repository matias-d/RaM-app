import React from 'react'
import styles from './navbar.module.css'
import rickLogo from '../../assets/Rick_and_Morty.svg.png'
import { Search } from '../Search/Search'
import { RiLoginBoxLine } from 'react-icons/ri'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { accessPermited } from '../../redux/actions'

export const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleClick () {
    dispatch(accessPermited())
    navigate('/RaM-app/')
  }

  return (
    <header className={styles.container}>
      <nav className={styles.header__nav}>
        <Link to='/RaM-app/home'>
          <img src={rickLogo} alt='logo rick and morty' className={styles.header__img} />
        </Link>
        <ul className={styles.header__list}>
          <li className={styles.list__items}>
            <NavLink to='/RaM-app/home' className={({ isActive }) => isActive ? styles.isActive : styles.items__links}>Inicio</NavLink>
          </li>
          <li className={styles.list__items}>
            <NavLink to='/RaM-app/favorites' className={({ isActive }) => isActive ? styles.isActive : styles.items__links}> Favoritos</NavLink>
          </li>
          <li className={styles.list__items}>
            <NavLink to='/RaM-app/about' className={({ isActive }) => isActive ? styles.isActive : styles.items__links}>Saber más</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.header__search}>
        <Search />
        <RiLoginBoxLine className={styles.header__btnLogout} onClick={handleClick} />
      </div>
    </header>
  )
}
