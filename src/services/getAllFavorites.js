import axios from 'axios'
import { API_FAVORITE_URL } from './API_KEYS'
async function getAllFavorites (querys = null) {
  try {
    const result = await axios.get(`${API_FAVORITE_URL}?${querys}`)
    return await result.data
  } catch (error) {
    console.error(error)
  }
}

export default getAllFavorites
