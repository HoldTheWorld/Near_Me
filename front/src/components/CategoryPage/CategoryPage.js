import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard/CategoryCard'
import classes from './categorypage.module.css'
import { useThemeContext } from '../../context/themeContext'

function ServicePage() {
  const { isLightTheme } = useThemeContext()
  const categoryes = useSelector((state) => state.categoryes)

  return (
    <>
    {isLightTheme && <section className={`${classes.cat_cards_block_ligth} scroll_light`}>
      {categoryes.map((el) => <CategoryCard key={el.id} {...el}/> )}
    </section>}

    {!isLightTheme && <section className={`${classes.cat_cards_block_dark} scroll_dark`}>
      {categoryes.map((el) => <CategoryCard key={el.id} {...el}/> )}
    </section>}
    </>
  )
}

export default ServicePage



