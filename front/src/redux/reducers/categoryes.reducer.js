import { TAKE_ALL_CATEGORYES } from '../types'

export const categoryesReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TAKE_ALL_CATEGORYES: {
      const { categoryes } = payload
      return categoryes
    }

    default: {
      return state
    }
  }
}
