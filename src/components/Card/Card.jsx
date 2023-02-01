import React from 'react'
import styles from './card.module.css'
import { RiHeartLine, RiHeartFill, RiCloseCircleLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { addFavorite, deleteCharacter, deleteFavorite } from '../../redux/actions'
import { Link } from 'react-router-dom'
export const Card = ({ character }) => {
  const dispatch = useDispatch()

  function handleClick () {
    if (!character.favorite) dispatch(addFavorite(character))
    else dispatch(deleteFavorite(character.id))
  }

  return (
    <div className={styles.card}>
      <button className={styles.card__iconClose} onClick={() => dispatch(deleteCharacter(character.id))}>
        <RiCloseCircleLine />
      </button>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} className={styles.card__img} />
      </Link>
      <div className={styles.card__name_container}>
        <h2 className={styles.card__name}>{character.name}</h2>
        {!character.favorite
          ? <RiHeartLine className={styles.card__iconFav} onClick={handleClick} />
          : <RiHeartFill className={styles.card__iconFav} onClick={handleClick} />}
      </div>
    </div>
  )
}
