import axios from 'axios'
import { API_URL } from './API_KEYS'
async function getCharacterById (id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default getCharacterById
