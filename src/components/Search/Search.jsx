import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/actions'
import styles from './search.module.css'

export const Search = () => {
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters)
  const favorites = useSelector((state) => state.favorites)
  function handleChange (e) {
    setId(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const characterFounded = characters.find(c => c.id === Number(id))
    const stateFavorite = favorites.some(f => f.id === Number(id))
    if (!characterFounded) dispatch(fetchPost(id, stateFavorite))
    else window.alert(`Ya se esta mostrando el personaje con la id ${id}`)
    setId('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.container__input}>
        <input
          type='number'
          value={id}
          placeholder='Buscar personaje por id'
          onChange={(e) => handleChange(e)}
          className={styles.form__input}
        />
        <RiSearch2Line className={styles.input__icon} />
      </div>
      <button type='submit' className={styles.form__btn}>Agregar</button>
    </form>
  )
}
