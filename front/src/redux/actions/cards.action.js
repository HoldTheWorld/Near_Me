import { useLayoutEffect } from 'react'
import { TAKE_ALL_CARDS, GET_CARD, ADD_NEW_CARD, COMPLETE_CARD, CHANGE_CARD, DELETE_CARD } from '../types'

export const selectAllCards = (cards) => ({
  type: TAKE_ALL_CARDS,
  payload: { cards }
})

export const likeCard = (card) => ({
  type: COMPLETE_CARD,
  payload: { card }
})

export const changeCard = (cards) => ({
  type: CHANGE_CARD,
  payload: { cards }
})

export const addCard = (card) => ({
  type: ADD_NEW_CARD,
  payload: { card }
})

export const deleteCard = (card) => ({
  type: DELETE_CARD,
  payload: { card }
})

// берем все карточки
export const getAllCards = () => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`, options)
    const cards = await response.json()
    dispatch(selectAllCards(cards))
  } catch (error) {
    console.log(error)
  }
}

// добавление карточки
export const addNewCard = (card, file) => async (dispatch) => {

  try {
    const formData = new FormData()
    for(let key in card) {
      formData.append(key, card[key])
    }

    formData.append('file', file)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`, {
      method: 'POST',
      body: formData,
    })  
    const newCard = await response.json()

    dispatch(addCard(newCard))
  } catch (error) {
    console.log(error)
  }
}

// удаление карточки
export const removeCard = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const card = await response.json()
    dispatch(deleteCard(card))
  } catch (error) {
    console.log(error)
  }
}

export const updateCard = (arg, file) => async (dispatch) => {
  try {
    const formData = new FormData()
    for (let key in arg) {
      formData.append(key, arg[key])
    }

    formData.append('file', file)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`, {
      method: 'PUT',
      body: formData,
    })  
    if (response.status === 200) {
      dispatch(changeCard(arg))
    }
  } catch (error) {

  }
}
