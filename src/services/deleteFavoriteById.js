import axios from 'axios'
import { API_FAVORITE_URL } from './API_KEYS'
async function deleteFavoriteById (id) {
  try {
    await axios.delete(`${API_FAVORITE_URL}/${id}`)
    return
  } catch (error) {
    console.error(error)
  }
}

export default deleteFavoriteById
