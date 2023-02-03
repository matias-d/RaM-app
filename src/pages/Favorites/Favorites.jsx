import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardFavorite } from '../../components/CardFavorite/CardFavorite'
import { RiHeartsLine } from 'react-icons/ri'
import { Filter } from '../../components/Filters/Filter'
import { cleanedFilter } from '../../redux/actions'
import styles from './favorites.module.css'
import rickYmortyImage from '../../assets/Rick-And-Morty-PNG-Transparent-Image.png'
export const Favorites = () => {
  const [toMapList, setToMapList] = useState([])

  const favorites = useSelector((state) => state.favorites)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  useEffect(() => {
    if (filter.length) setToMapList(filter)
    else setToMapList(favorites)
  }, [filter])

  useEffect(() => {
    return () => {
      dispatch(cleanedFilter())
    }
  }, [])

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
          toMapList.map((favorite) => (
            <CardFavorite key={favorite.id} favorite={favorite} />
          ))
        }
      </div>
    </>
  )
}
