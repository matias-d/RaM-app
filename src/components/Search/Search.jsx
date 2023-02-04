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
  const stateFavorite = favorites.some(f => f.id === Number(id))
  function handleChange (e) {
    setId(e.target.value)
  }

  function handleClick () {
    const idRandom = Math.floor(Math.random() * 826)
    dispatch(fetchPost(idRandom, stateFavorite))
  }

  function handleSubmit (e) {
    e.preventDefault()
    const characterFounded = characters.find(c => c.id === Number(id))

    if (!characterFounded) dispatch(fetchPost(id, stateFavorite))
    else window.alert(`Ya se esta mostrando el personaje con la id ${id}`)
    setId('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button type='button' className={styles.form__btnRandom} onClick={handleClick}>Random</button>
      <div className={styles.container__input}>
        <input
          type='number'
          max='826'
          min='1'
          value={id}
          placeholder='Buscar personaje por id'
          onChange={(e) => handleChange(e)}
          className={styles.form__input}
        />
        <RiSearch2Line className={styles.input__icon} />
      </div>
    </form>
  )
}
