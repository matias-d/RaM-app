import { useSelector } from 'react-redux'
import { CardFavorite } from '../../components/CardFavorite/CardFavorite'
import styles from './favorites.module.css'
export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites)
  return (
    <div className={styles.container}>
      {
        favorites.map((favorite) => (
          <CardFavorite key={favorite.id} favorite={favorite} />
        ))
      }
    </div>
  )
}
