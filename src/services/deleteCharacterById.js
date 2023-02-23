import axios from 'axios'
import { API_URL } from './API_KEYS'
async function deleteCharacterById (id) {
  try {
    await axios.delete(`${API_URL}/${id}`)
    return
  } catch (error) {
    console.error(error)
  }
}

export default deleteCharacterById
