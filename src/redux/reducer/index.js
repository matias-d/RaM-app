import { ADD_CHARACTER, ADD_FAVORITE, DELETE_CHARACTER, DELETE_FAVORITE, TOGGLE_FAVORITE } from '../actions/types'

const initialState = {
  characters: [],
  favorites: []
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(c => c.id !== action.payload)
      }
    case TOGGLE_FAVORITE:
      return {
        ...state,
        characters: state.characters.map(c => {
          if (c.id !== action.payload) return c
          return {
            ...c,
            favorite: !c.favorite
          }
        })
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(f => f.id !== action.payload)
      }
    default:
      return { ...state }
  }
}

export default rootReducer
