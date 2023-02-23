import axios from 'axios'
import { API_FAVORITE_URL } from './API_KEYS'
async function postFavorite (newFavorite) {
  try {
    const result = await axios.post(`${API_FAVORITE_URL}`, newFavorite)
    return result.data
  } catch (error) {
    console.error(error)
  }
}

export default postFavorite
