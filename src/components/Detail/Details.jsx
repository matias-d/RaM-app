import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCharacterById from '../../services/getCharacterById'
import styles from './details.module.css'
import { RiEarthLine, RiHeartPulseLine, RiAliensLine, RiParentLine, RiMapPinLine } from 'react-icons/ri'

export const Details = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getCharacterById(id)
      .then(c => setCharacter(c))
    return () => {
      setCharacter({})
    }
  }, [id])

  return (
    <div className={styles.container}>
      <img src={character.image} alt={character.name} className={styles.details__img} />
      <div className={styles.detail__info}>
        <h2 className={styles.info__name}>{character.name}</h2>
        <h3 className={styles.info__origin}><RiEarthLine className={styles.info__iconOrigin} /> Origen : <span>{character.origin?.name}</span></h3>
        <h3 className={styles.info__location}><RiMapPinLine className={styles.info__iconLocation} /> Ubicación : <span>{character.location?.name}</span></h3>
        <div className={styles.info__characteristics}>
          <p className={styles.characteristics__status}><RiHeartPulseLine className={styles.characteristics__iconStatus} /> Estado : <span>{character.status}</span></p>
          <p className={styles.characteristics__specie}><RiAliensLine className={styles.characteristics__iconSpecie} /> Especie : <span>{character.species}</span></p>
          <p className={styles.characteristics__genre}><RiParentLine className={styles.characteristics__iconGenre} /> Genero : <span>{character.gender}</span></p>
        </div>
      </div>
    </div>
  )
}
