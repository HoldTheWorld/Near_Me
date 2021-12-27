import styles from './support.module.css'
import { useThemeContext } from '../../context/themeContext'

function Support() {

  const { isLightTheme , setTheme} = useThemeContext()

  return (

    <>
    {isLightTheme &&
    <div className={styles.support_main_light}>
      <form className={styles.support_content_light}> 
      <p className={styles.title_light}>Введите ваше сообщение</p>
          <label>Ваше имя</label>
          <input className={styles.support_title_input_light}/>
          <label>Ваш email для связи</label>
          <input className={styles.support_title_input_light}/>
          <label>Текст обращения</label>
          <textarea  className={styles.support_text_input_light}></textarea>
          <button className={styles.button_light}>Отправить</button>
      </form>
    </div>
    }

    {!isLightTheme &&
    <div className={styles.support_main_dark}>
        <form className={styles.support_content_dark}> 
        <p className={styles.title_dark}>Введите ваше сообщение</p>
            <label>Ваше имя</label>
            <input className={styles.support_title_input_dark}/>
            <label>Ваш email для связи</label>
            <input className={styles.support_title_input_dark}/>
            <label>Текст обращения</label>
            <textarea  className={styles.support_text_input_dark}></textarea>
            <button className={styles.button_dark}>Отправить</button>
        </form>
    </div>
    }
    </>

  )
}

export default Support
