import { GET_CARD, CHANGE_CARD } from '../types'

export const cardReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {

    case GET_CARD: {
      const { card } = payload
      return card
    }
    case CHANGE_CARD: {
      const { card } = payload
      return card
    }
    default: {
      return state
    }
  }
}

