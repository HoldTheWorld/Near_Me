import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import classes from './servicesPage.module.css'
import { getAllCards } from '../../redux/actions/cards.action'

function ServicePage() {
  const navigate = useNavigate()
  const cards = useSelector(state => {
    return state.cards
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCards())
    navigate('/')
  }, [])

  return (
    <>
    <section className={classes.cards}>
        {cards.map((item)=>{
          return <Card key={item.id} {...item} />
        })}
    </section>
    </>
  )
}

export default ServicePage



