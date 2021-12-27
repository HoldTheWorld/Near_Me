import { TAKE_ALL_CATEGORYES, GET_CATEGORY } from '../types'

export const selectAllCategorys = (categoryes) => ({
  type: TAKE_ALL_CATEGORYES,
  payload: { categoryes }
})

export const selectCategory = (card) => ({
  type: GET_CATEGORY,
  payload: { card }
})

export const getAllCategorys = (data) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}`, options)
    const cards = await response.json()
    dispatch(selectAllCategorys(cards))
  } catch (error) {
    console.log(error)
  }
}

export const getCategory = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category/${id}`, options)
    const cardPost = await response.json()
    dispatch(selectCategory(cardPost))
  } catch (error) {
    console.log(error)
  }
}

