
import getCharacterById from '../../services/getCharacterById'
import {
  ADD_CHARACTER,
  ADD_FAVORITE,
  CLEANED_FILTER,
  DELETE_CHARACTER,
  DELETE_FAVORITE,
  FILTER_BY_GENRE,
  FILTER_BY_SPECIE,
  FILTER_BY_STATUS,
  IS_ACCESS_PERMITED,
  TOGGLE_FAVORITE
} from './types'

// Actions Characters Landing

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

// Actions Favorite

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

// Actions Filters

export function filterByGenre (genre) {
  return {
    type: FILTER_BY_GENRE,
    payload: genre
  }
}

export function filterByStatus (status) {
  return {
    type: FILTER_BY_STATUS,
    payload: status
  }
}

export function filterBySpecie (specie) {
  return {
    type: FILTER_BY_SPECIE,
    payload: specie
  }
}

export function cleanedFilter () {
  return {
    type: CLEANED_FILTER
  }
}

// Actions Login

export function accessPermited () {
  return {
    type: IS_ACCESS_PERMITED
  }
}
