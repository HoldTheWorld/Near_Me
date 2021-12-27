import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Toggle from '../Toggle/Toggle'
import { useThemeContext } from '../../context/themeContext'
import ReactDOM from 'react-dom';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useHistory, useLocation, useParams } from "react-router-dom";
import Modal from '../Modal/Modal'
import logo from './logo.png'




function Header() {

  let location = useLocation();

  const user = useSelector((state) => state.user.value)
  const { isLightTheme } = useThemeContext()

  return (
    <>
    {isLightTheme &&  <header className={styles.header_light}>
  
      <div className={styles.header_content_light}>
        <div className={styles.header_logo_light}>
        <img src={logo} alt="Logo" /><br/>NEAR ME   
        </div>

        <div className={`${styles.links_block_light}`}> 
          <Link className={styles.head_links_light} to='/'><i className="fas fa-home"></i> На домашнюю</Link>
          <Link className={styles.head_links_light} to='/places'><i className="fas fa-map-marker-alt"></i> Места</Link>
          { user ?
          <>
          <Link className={styles.head_links_light} to='/profilepage'><i className="fas fa-user"></i> Профиль</Link>
          <Link className={styles.head_links_light} to='/logout'> <i className="fas fa-sign-out-alt"></i> Выйти</Link>
          </>
          :
          <>
          <Link className={styles.head_links_light} to='/login' state={{ background: location}}> <i className="fas fa-sign-in-alt"></i> Войти</Link>
          <Link className={styles.head_links_light} to='/register' state={{ background: location}}> <i className="fas fa-clipboard-check"></i> Регистрация</Link>
          </>
        }
        </div>

        <div className={styles.header_toggle_light}>
        <Toggle/>
        </div>
      </div>
    
    </header>}
    
    {!isLightTheme &&  <header className={styles.header_dark}>
          <div className={styles.header_content_dark}>
         <div className={styles.header_logo_dark}>
         <img src={logo} alt="Logo" /><br/>NEAR ME    
        </div>
         
         <div className={styles.links_block_dark}>
          <Link className={styles.head_links_dark} to='/'><i className="fas fa-home"></i> На домашнюю</Link>
          <Link className={styles.head_links_dark} to='/places'><i className="fas fa-map-marker-alt"></i> Места</Link>
          { user ?
          <>
          <Link className={styles.head_links_dark} to='/profilepage'><i className="fas fa-user"></i> Профиль</Link>
          <Link className={styles.head_links_dark} to='/logout'> <i className="fas fa-sign-out-alt"></i> Выйти</Link>
          </>
          :
          <>
          <Link className={styles.head_links_dark} to='/login' state={{ background: location}}> <i className="fas fa-sign-in-alt"></i> Войти</Link>
          <Link className={styles.head_links_dark} to='/register' state={{ background: location}}> <i className="fas fa-clipboard-check"></i> Регистрация</Link>
          </>
        }
         </div>

          <div className={styles.header_toggle_dark}>
          <Toggle/>
          </div>

          </div>
    

    </header>}
    </>
  
  )
}

export default Header
