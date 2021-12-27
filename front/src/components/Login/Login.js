import React from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './login.module.css'
import { useNavigate,useLocation } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import {loginUser, getUser} from '../../redux/actions/user.actions'
import { useThemeContext } from '../../context/themeContext'

function Login({closeModal}){
  const { isLightTheme , setTheme} = useThemeContext()
  let location = useLocation();

  const inputs = [
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'пароль', type: 'password', id: 'password'})
  ]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {error, value: user} = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])


  function completeUser(e) {
    e.preventDefault();
    dispatch(loginUser({email: inputs[0].getValue(), password: inputs[1].getValue()}))
 
  }

  function handleClose() {
    closeModal()
  }

  return(
    <>
    {isLightTheme && <div className={styles.login_container_light}>
       
        <form className={styles.login_box_light} onSubmit={completeUser}>
          <div className={styles.closebutton_container_light}>
          <button className={styles.closebutton_light} onClick={()=> {handleClose()}} type='button'>x</button>
          </div>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          {error}
        <button className={styles.button_light} variant="primary" type="submit">
          Вход
        </button>
      </form>
    </div>}

    {!isLightTheme && <div className={styles.login_container_dark}>
        <form className={styles.login_box_dark} onSubmit={completeUser}>
        <div className={styles.closebutton_container_dark}>
          <button className={styles.closebutton_dark} onClick={()=> {handleClose()}} type='button'>x</button>
          </div>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          {error}
        <button className={styles.button_dark} variant="primary" type="submit">
         Вход
        </button>
      </form>
    </div>}
    </>
  )
}

export default Login
