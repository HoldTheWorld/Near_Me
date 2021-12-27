import { TAKE_ALL_CARDS, GET_CARD, DELETE_CARD, ADD_NEW_CARD, COMPLETE_CARD, CHANGE_CARD } from '../types'

export const cardsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case TAKE_ALL_CARDS: {
      const { cards } = payload
      return cards
    }

    case ADD_NEW_CARD: {
      const { card } = payload
      return [...state, card]
    }

    case DELETE_CARD: {
      const { card } = payload
      return [card]
    }

    case CHANGE_CARD: {
      const { cards } = payload

      return state.map(el => {
        if (el.id === Number(cards.id)) {
          return {
            ...el,
            image: cards.image,
            text: cards.text,
            title: cards.title,
            instagram: cards.instagram,
            telegram: cards.telegram,
            whatsapp: cards.whatsapp,
          }
        } else {
          return el
        }
      })
      
  }

    case COMPLETE_CARD: {
      const { card } = payload
      return state.map((item) => {
        if (item.id === card.id) {
          return card
        } else {
          return item
        }
      })
    }

    default: {
      return state
    }
  }
}
