import React from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './register.module.css'
import {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {registerNewUser} from '../../redux/actions/user.actions'
import { useThemeContext } from '../../context/themeContext'

function Register({closeModal}){

  const { isLightTheme , setTheme} = useThemeContext()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error, value: user} = useSelector((state) => state.user)

  const inputs = [
    useInput({ name: 'Имя', type: 'text', id: 'name'}),
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'Телефон', type: 'text', id: 'phone'}),
    useInput({ name: 'Пароль', type: 'password', id: 'password'})
  ]

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  function completeUser(e) {
    e.preventDefault();
    dispatch(registerNewUser({email: inputs[1].getValue(), password: inputs[3].getValue(), name: inputs[0].getValue(), phone: inputs[2].getValue()}))
  }

  function handleClose() {
    closeModal()
  }

  return(
    <>
    {isLightTheme &&   <div className={styles.register_container_light} onSubmit={completeUser}>
        <form className={styles.register_box_light}>
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
        <button className={styles.button_light}  variant="primary" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>}

    {!isLightTheme &&   <div className={styles.register_container_dark} onSubmit={completeUser}>
        <form className={styles.register_box_dark}>
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
        Зарегистрироваться
        </button>
      </form>
    </div>}
  
    </>
  )
}

export default Register
