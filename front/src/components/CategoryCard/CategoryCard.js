import React from 'react'
import styles from './categorycard.module.css'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/themeContext'

function CategoryCard({icon, title, id}) {
  const { isLightTheme } = useThemeContext()

  return(
    <>
    {isLightTheme &&  <Link className={styles.cat_link_light} to={`/places/${id}`}>
      <div className={styles.cat_card_wrapper_light}>
        <div id='cat_item' className={styles.cat_icon_light}> 
            <i className={icon}></i>
        </div>
        <div className={styles.cat_title_light}> 
          {title}
        </div>
      </div>
    </Link>}

    {!isLightTheme &&  <Link className={styles.cat_link_dark } to={`/places/${id}`}>
      <div className={styles.cat_card_wrapper_dark }>
        <div id='cat_item' className={styles.cat_icon_dark }> 
            <i className={icon}></i>
        </div>
        <div className={styles.cat_title_dark}> 
          {title}
        </div>
      </div>
    </Link>}
    </>
    )
}

export default CategoryCard


