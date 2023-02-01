import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import styles from './cardslist.module.css'
export const CardsList = () => {
  const characters = useSelector((state) => state.characters)

  return (
    <div className={styles.container}>
      {
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      }
    </div>
  )
}
