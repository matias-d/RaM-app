import axios from 'axios'
import { API_URL } from './API_KEYS'
async function getAllCharacters () {
  try {
    const result = await axios.get(`${API_URL}/all/characters`)
    return await result.data
  } catch (error) {
    console.error(error)
  }
}

export default getAllCharacters
