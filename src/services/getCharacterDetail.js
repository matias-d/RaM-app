import axios from 'axios'
import { API_DETAIL_URL } from './API_KEYS'
async function getCharacterDetail (id) {
  try {
    const response = await axios.get(`${API_DETAIL_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default getCharacterDetail
