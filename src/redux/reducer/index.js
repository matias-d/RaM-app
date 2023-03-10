import { ADD_CHARACTER, ADD_FAVORITE, DELETE_CHARACTER, DELETE_FAVORITE, FILTER_BY_GENRE, FILTER_BY_SPECIE, FILTER_BY_STATUS, IS_ACCESS_PERMITED, CLEANED_FILTER, GET_ALL_CHARACTERS, GET_ALL_FAVORITES } from '../actions/types'

const initialState = {
  characters: [],
  favorites: [],
  filter: [],
  access: false
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
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
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      }
    case ADD_FAVORITE:
      return {
        ...state,
        characters: state.characters.map(c => {
          if (c.id !== action.payload.id) return c
          return {
            ...c,
            favorite: !c.favorite
          }
        }),
        favorites: [...state.favorites, action.payload]
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        characters: state.characters.map(c => {
          if (c.id !== action.payload) return c
          return {
            ...c,
            favorite: !c.favorite
          }
        }),
        favorites: state.favorites.filter(f => f.id !== action.payload)
      }
    case FILTER_BY_GENRE:
      return {
        ...state,
        filter: state.favorites.filter(f => f.gender === action.payload)
      }
    case FILTER_BY_STATUS:
      return {
        ...state,
        filter: state.favorites.filter(f => f.status === action.payload)
      }

    case FILTER_BY_SPECIE:
      return {
        ...state,
        filter: state.favorites.filter(f => f.species === action.payload)
      }

    case CLEANED_FILTER :
      return {
        ...state,
        filter: []
      }
    case IS_ACCESS_PERMITED:
      return {
        ...state,
        access: !state.access
      }
    default:
      return { ...state }
  }
}

export default rootReducer
