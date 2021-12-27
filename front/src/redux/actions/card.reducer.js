import { GET_CARD, ADD_NEW_CARD, COMPLETE_CARD, CHANGE_CARD, DELETE_CARD } from '../types'



export const selectCard = (card) => ({
  type: GET_CARD,
  payload: { card }
})


export const getCard = (id) => async (dispatch) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/${id}`, options)
    const cardPost = await response.json()
    dispatch(selectCard(cardPost))
  } catch (error) {
    console.log(error)
  }
}
