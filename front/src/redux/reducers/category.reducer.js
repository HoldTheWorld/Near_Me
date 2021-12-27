import { GET_CATEGORY } from '../types'

export const categoryReducer = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CATEGORY: {
      const { category } = payload
      return category
    }

    default: {
      return state
    }
  }
}
