
import deleteCharacterById from '../../services/deleteCharacterById'
import deleteFavoriteById from '../../services/deleteFavoriteById'
import getAllCharacters from '../../services/getAllCharacters'
import getAllFavorites from '../../services/getAllFavorites'
import getCharacterById from '../../services/getCharacterById'
import postFavorite from '../../services/postFavorite'
import {
  ADD_CHARACTER,
  ADD_FAVORITE,
  CLEANED_FILTER,
  DELETE_CHARACTER,
  DELETE_FAVORITE,
  FILTER_BY_GENRE,
  FILTER_BY_SPECIE,
  FILTER_BY_STATUS,
  GET_ALL_CHARACTERS,
  IS_ACCESS_PERMITED,
  GET_ALL_FAVORITES
} from './types'

// Actions Characters Landing

function saveAllCharacters (allCharacters) {
  return {
    type: GET_ALL_CHARACTERS,
    payload: allCharacters
  }
}

export function fetchGetAllCharacters () {
  return function (dispatch) {
    getAllCharacters()
      .then(c => dispatch(saveAllCharacters(c)))
  }
}

function addCharacter (character) {
  return {
    type: ADD_CHARACTER,
    payload: character
  }
}

export function fetchGetCharacterById (id) {
  return function (dispatch) {
    getCharacterById(id)
      .then(c => dispatch(addCharacter(c)))
  }
}

function deleteCharacter (id) {
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
}

export function fetchDelete (id) {
  return async function (dispatch) {
    await deleteCharacterById(id)
    dispatch(deleteCharacter(id))
  }
}

// Actions Favorite

function addFavorite (character) {
  return {
    type: ADD_FAVORITE,
    payload: character
  }
}

export function fetchPostFavorite (character) {
  const { id, name, status, species, gender, image } = character
  const newFavorite = {
    id,
    name,
    status,
    species,
    gender,
    image
  }

  return async function (dispatch) {
    const updateFavorite = await postFavorite(newFavorite)
    dispatch(addFavorite(updateFavorite))
  }
}

export function deleteFavorite (id) {
  return {
    type: DELETE_FAVORITE,
    payload: id
  }
}

export function fetchDeleteFavorite (id) {
  return async function (dispatch) {
    await deleteFavoriteById(id)
    dispatch(deleteFavorite(id))
  }
}

function saveAllFavorites (allFavorites) {
  return {
    type: GET_ALL_FAVORITES,
    payload: allFavorites
  }
}

export function fetchGetAllFavorites (querys) {
  return function (dispatch) {
    getAllFavorites(querys)
      .then(f => dispatch(saveAllFavorites(f)))
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
