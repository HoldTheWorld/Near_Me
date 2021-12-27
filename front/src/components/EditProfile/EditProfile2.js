import React, { useEffect, useState } from 'react'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import styles from './editprofile.module.css'
import { useThemeContext } from '../../context/themeContext'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUser } from '../../redux/actions/user.actions'




function EditProfile(){

  const { isLightTheme , setTheme} = useThemeContext()

  const user = useSelector((state) => state.user.value)
  const userAll  = useSelector((state) => state.userAll.value)
  console.log(userAll);
  const dispatch = useDispatch()
 

  const inputs = [
    useInput({ name: 'Имя', type: 'text', id: 'name'}),
    useInput({ name: 'email', type: 'email', id: 'email'}),
    useInput({ name: 'Телефон', type: 'text', id: 'phone'}),
    useInput({ name: 'Пароль', type: 'text', id: 'password'}),
  ]

  const [userName, setName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userPhone, setPhone] = useState('')
  const [userPass, setPass] = useState('')



  useEffect(() => {
    dispatch(getUser(user.id))
   
  }, [])

  return(
    <>
    {isLightTheme &&  <form className={styles.editprofile_box_light}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <button className={styles.button_light} variant="primary" type="submit">
          Сохранить
        </button>
      </form>}

      {!isLightTheme &&  <form className={styles.editprofile_box_dark}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
        <button className={styles.button_dark}variant="primary" type="submit">
          Сохранить
        </button>
      </form>}
    </>
 
  )
}

export default EditProfile
