import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import styles from './cardslist.module.css'
import rickImage from '../../assets/58f37709a4fa116215a9240d.png'
import { RiSkullLine } from 'react-icons/ri'
export const CardsList = () => {
  const characters = useSelector((state) => state.characters)
  if (!characters.length) {
    return (
      <div className={styles.card__info_container}>
        <p className={styles.card__info}>No hay nada que mostrar 👎, intente buscar a un personaje por su numero de id <strong>(Max 826).</strong></p>
        <img src={rickImage} alt='Rick de rick and morty' className={styles.card__img} />
      </div>
    )
  }
  return (
    <>
      <h2 className={styles.card__title}><RiSkullLine className={styles.card__icon} />Tus <span>Personajes</span></h2>
      <div className={styles.container}>
        {
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      }
      </div>
    </>
  )
}
