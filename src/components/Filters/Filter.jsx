import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByGenre, filterBySpecie, filterByStatus } from '../../redux/actions'
import styles from './filter.module.css'
export const Filter = () => {
  const dispatch = useDispatch()
  const selecteValue = (e) => {
    if (e.target.name === 'status') dispatch(filterByStatus(e.target.value))
    if (e.target.name === 'gender') dispatch(filterByGenre(e.target.value))
    if (e.target.name === 'species') dispatch(filterBySpecie(e.target.value))
  }

  return (
    <section className={styles.container}>
      <div className={styles.filter__status_container}>
        <label htmlFor='status' className={styles.status__label}>Estado:</label>
        <select name='status' defaultValue='all' className={styles.status__select} onChange={(e) => selecteValue(e)}>
          <option value='all' className={styles.status__options}>All</option>
          <option value='Alive' className={styles.status__options}>Alive</option>
          <option value='Dead' className={styles.status__options}>Dead</option>
          <option value='unknown' className={styles.status__options}>Unknow</option>
        </select>
      </div>
      <div className={styles.filter__genre_container}>
        <label htmlFor='gender' className={styles.genre__label}>Genero:</label>
        <select name='gender' className={styles.genre__select} onChange={(e) => selecteValue(e)}>
          <option value='all' className={styles.genre__options}>All</option>
          <option value='Male' className={styles.genre__options}>Male</option>
          <option value='Female' className={styles.genre__options}>Female</option>
          <option value='unknown' className={styles.genre__options}>Unknown</option>
          <option value='Genderless' className={styles.genre__options}>Genderless</option>
        </select>
      </div>
      <div className={styles.filter__specie_container}>
        <label htmlFor='species' className={styles.specie__label}>Especie:</label>
        <select name='species' className={styles.specie__select} onChange={(e) => selecteValue(e)}>
          <option value='all' className={styles.specie__options}>All</option>
          <option value='Human' className={styles.specie__options}>Human</option>
          <option value='Alien' className={styles.specie__options}>Alien</option>
          <option value='Humanoid' className={styles.specie__options}>Humanoid</option>
          <option value='unknown' className={styles.specie__options}>Unknown</option>
          <option value='Mythological Creature' className={styles.specie__options}>Mythological Creature</option>
        </select>
      </div>
    </section>
  )
}
