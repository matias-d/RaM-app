import axios from 'axios'

async function getCharacterById (id) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default getCharacterById
