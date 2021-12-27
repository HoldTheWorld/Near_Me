import React from 'react'
import { Link } from 'react-router-dom'
import classes from './card.module.css'
import { useThemeContext } from '../../context/themeContext'

function Card({image, title, category, price, id}){
    const { isLightTheme } = useThemeContext()

  return(
    <>
    {isLightTheme &&  
    <Link className={classes.moreBlock} to={`/card/${id}`}>
      <div className={classes.card_wrapper_light}>
        <img src={`http://localhost:3001/uploads/${image}`} alt=""/>
        <div className={classes.card_info_light}>

          <h3 title={title} className={classes.title_light}>
          {title}
          </h3>
          <div className={classes.title_light}>
          {category}
          </div>
          <div className={classes.title_light}>
          {price}
          </div>

        </div>
      </div>
    </Link>
    }

    {!isLightTheme &&  
    <Link className={classes.moreBlock} to={`/card/${id}`}>
      <div className={classes.card_wrapper_dark}>
        <img src={`http://localhost:3001/uploads/${image}`} alt=""/>

        <div className={classes.card_info_dark}>
        <h3 title={title} className={classes.title_dark}>
        {title}
        </h3>
        <div className={classes.title_dark}>
          {category}
        </div>
        <div className={classes.title_dark}>
          {price}
        </div>

        </div>
      </div>
    </Link>
    }
   
  </>
  )
}

export default Card
