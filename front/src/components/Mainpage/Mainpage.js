import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ServicePage from '../ServicePage/ServicePage'
import CategoryPage from '../CategoryPage/CategoryPage'
import { getAllCards } from '../../redux/actions/cards.action'

function Mainpage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCards())
  }, [])

  return (
    <>
      <CategoryPage/>
      <ServicePage/>
    </>
  )

}

export default Mainpage
