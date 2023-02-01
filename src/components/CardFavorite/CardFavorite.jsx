import React from 'react'
import { RiHashtag } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styles from './cardfavorite.module.css'
export const CardFavorite = ({ favorite }) => {
  return (
    <div className={styles.card}>
      <Link to={`/character/${favorite.id}`}>
        <img src={favorite.image} className={styles.card__img} />
      </Link>
      <div className={styles.card__name_container}>
        <h2 className={styles.card__name}>{favorite.name}</h2>
        <p className={styles.card__id}><RiHashtag className={styles.card__iconHag} /><span>{favorite.id}</span></p>
      </div>
    </div>
  )
}
