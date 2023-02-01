
import getCharacterById from '../../services/getCharacterById'
import { ADD_CHARACTER, ADD_FAVORITE, DELETE_CHARACTER, DELETE_FAVORITE, TOGGLE_FAVORITE } from './types'

export function addCharacter (character, stateFavorite) {
  return {
    type: ADD_CHARACTER,
    payload: { ...character, favorite: stateFavorite }
  }
}

export function fetchPost (id, stateFavorite) {
  return function (dispatch) {
    getCharacterById(id)
      .then(c => dispatch(addCharacter(c, stateFavorite)))
  }
}

export function deleteCharacter (id) {
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
}

export function toggleFavorite (id) {
  return {
    type: TOGGLE_FAVORITE,
    payload: id
  }
}

export function addFavorite (character) {
  return function (dispatch) {
    dispatch(toggleFavorite(character.id))
    dispatch({ type: ADD_FAVORITE, payload: character })
  }
}

export function deleteFavorite (id) {
  return function (dispatch) {
    dispatch(toggleFavorite(id))
    dispatch({ type: DELETE_FAVORITE, payload: id })
  }
}
