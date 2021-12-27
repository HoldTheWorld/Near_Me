import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import classes from './userCards.module.css'
import { getAllCards } from '../../redux/actions/cards.action'

function UserCards() {
  const navigate = useNavigate()
  const [userCards, setUserCards] = useState([])
  const cards = useSelector(state => {
    return state.cards
  })
  const user = useSelector(state => {
    return state.user
  })

  useEffect(() => {
    const filteredCards = cards.filter((item) =>  Number(item.user_id) === Number(user.value.id))
    setUserCards(filteredCards)
 
  }, [])

  return (
    <>
      <section className={classes.cards}>
        {userCards.map((item) => {
          return <Card key={item.id} {...item} />
        })}
      </section>
    </>
  )
}

export default UserCards



