import styles from './input.module.css'
import { useThemeContext } from '../../context/themeContext'

function Input({id, name, type, value, handleChange}) {

  const { isLightTheme , setTheme} = useThemeContext()

  return (
    <>
    {isLightTheme && <div key={id} >
      <div> <label className={styles.input_label_light} htmlFor={id}> {name} </label></div>
      <input className={styles.inputfield_light} type={type} onChange={handleChange} id={id} name={name} placeholder={name}/>
    </div>}

    {!isLightTheme && <div key={id} >
      <div> <label className={styles.input_label_dark} htmlFor={id}> {name} </label></div>
      <input className={styles.inputfield_dark} type={type} onChange={handleChange} id={id} name={name} placeholder={name}/>
    </div>}
    
    </>
  )

}

export default Input 
