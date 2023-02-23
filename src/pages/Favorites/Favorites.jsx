import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardFavorite } from '../../components/CardFavorite/CardFavorite'
import { RiHeartsLine } from 'react-icons/ri'
import { Filter } from '../../components/Filters/Filter'
import { fetchGetAllFavorites } from '../../redux/actions'
import styles from './favorites.module.css'
import rickYmortyImage from '../../assets/Rick-And-Morty-PNG-Transparent-Image.png'
export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites)
  const characters = useSelector(state => state.characters)
  const charactersFavorites = characters.some((character) => character.favorite === true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetAllFavorites())
  }, [Filter])

  if (charactersFavorites && !favorites.length) {
    return (
      <>
        <h2 className={styles.favorites__title}><RiHeartsLine className={styles.favorites__icon} />Tus <span>Favoritos</span></h2>
        <Filter />
        <div className={styles.container__message}>
          <p className={styles.notcharac__favorites}>No se encuentran personajes con esas caracteristicas!</p>
        </div>
      </>
    )
  }

  if (!favorites.length) {
    return (
      <div className={styles.favorites__info_container}>
        <p className={styles.favorites__info}>Usted no tiene favoritos 😔, vaya al <strong>inicio</strong> y indique cual es su favorito! </p>
        <img src={rickYmortyImage} alt='Rick y Morty de rick and morty' className={styles.favorites__img} />
      </div>
    )
  }

  return (
    <>
      <h2 className={styles.favorites__title}><RiHeartsLine className={styles.favorites__icon} />Tus <span>Favoritos</span></h2>
      <Filter />
      <div className={styles.container}>
        {
          favorites.map((favorite) => (
            <CardFavorite key={favorite.id} favorite={favorite} />
          ))
        }
      </div>
    </>
  )
}
