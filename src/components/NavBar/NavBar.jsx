import React from 'react'
import styles from './navbar.module.css'
import rickLogo from '../../assets/Rick_and_Morty.svg.png'
import { Search } from '../Search/Search'
import { RiHome2Line, RiLoginBoxLine, RiHeartsLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.header__nav}>
        <Link to='/home'>
          <img src={rickLogo} alt='logo rick and morty' className={styles.header__img} />
        </Link>
        <ul className={styles.header__list}>
          <li className={styles.list__items}>
            <NavLink to='/home' className={({ isActive }) => isActive ? styles.isActive : styles.items__links}><RiHome2Line className={styles.links__icon} />Inicio</NavLink>
          </li>
          <li className={styles.list__items}>
            <NavLink to='/favorites' className={({ isActive }) => isActive ? styles.isActive : styles.items__links}><RiHeartsLine className={styles.links__icon} /> Favoritos</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.header__search}>
        <Search />
        <button className={styles.header__btnLogout}><RiLoginBoxLine /></button>
      </div>
    </header>
  )
}
