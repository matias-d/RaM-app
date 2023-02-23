import React from 'react'
import { RiHashtag, RiHeartFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDeleteFavorite } from '../../redux/actions'
import styles from './cardfavorite.module.css'
export const CardFavorite = ({ favorite }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.card}>
      <div className={styles.card__iconFav} onClick={() => dispatch(fetchDeleteFavorite(favorite.id))}>
        <RiHeartFill />
      </div>
      <Link to={`/RaM-app/character/${favorite.id}`}>
        <img src={favorite.image} className={styles.card__img} />
      </Link>
      <div className={styles.card__name_container}>
        <h2 className={styles.card__name}>{favorite.name}</h2>
        <p className={styles.card__id}><RiHashtag className={styles.card__iconHag} /><span>{favorite.id}</span></p>
      </div>
    </div>
  )
}
