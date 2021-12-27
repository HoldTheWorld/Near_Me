import React, { useState } from 'react'
import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './cardinput.module.css'
import { useThemeContext } from '../../context/themeContext'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewCard } from '../../redux/actions/cards.action'

function Cabinet() {

  const { isLightTheme } = useThemeContext()
  const user = useSelector((state)=>{
    return state.user
  })

  const [category, setCategory] = useState(1)
  const categoryes = useSelector((state) => state.categoryes)
  const inputs = [
    useInput({ name: 'title', type: 'text', id: 'title'}),
    useInput({ name: 'text', type: 'text', id: 'text'}),
    useInput({ name: 'image', type: 'file', id: 'image'}),
    useInput({ name: 'price', type: 'text', id: 'price'}),
    useInput({ name: 'instagram', type: 'text', id: 'instagram'}),
    useInput({ name: 'whatsapp', type: 'text', id: 'whatsapp'}),
    useInput({ name: 'telegram', type: 'text', id: 'telegram'}),
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()


  function getCardData(event) {
    event.preventDefault()
    dispatch(addNewCard({
      title: inputs[0].getValue(),
      text: inputs[1].getValue(),
      image: 'https://i.ibb.co/GFcfRrK/Intersect.png',
      price: Number(inputs[3].getValue()),
      category_id: Number(category),
      user_id: user.value.id,
      instagram: inputs[4].getValue(),
      whatsapp: inputs[5].getValue(),
      telegram: inputs[6].getValue(),
      isActive: true
    }))
    navigate('/')
  }

  return (
    <>

    {isLightTheme && <div className={styles.card_input_container_light}>
        <form className={styles.card_input_box_light} onSubmit={getCardData}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          <select onChange={(event) => setCategory(event.target.value)} value={category}>
            {categoryes.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>    
        <button className={styles.button_light} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}

    {!isLightTheme && <div className={styles.card_input_container_dark}>
    <form className={styles.card_input_box_dark} onSubmit={getCardData}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
          <select onChange={(event) => setCategory(event.target.value)} value={category}>
            {categoryes.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
          </select>       
        <button className={styles.button_dark} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}
    
    </>
 
  )


}

export default Cabinet
