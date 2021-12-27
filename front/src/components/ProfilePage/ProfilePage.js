import styles from './profilepage.module.css'
import EditProfile from '../EditProfile/EditProfile'
import Support from '../Support/Support'
import { useState } from 'react'
import { useThemeContext } from '../../context/themeContext'
import MapsTest from '../MapsTest/MapsTestCreateCard'
import UserCards from '../UserCards/UserCards'

function ProfilePage() {
const { isLightTheme , setTheme} = useThemeContext()
const [block, setBlock ] = useState('');
return (
  <>
  {isLightTheme && <div className={styles.profile_page_container_light}>
      <div className={styles.profile_page_menu_light}>
        <button onClick={()=> setBlock(<UserCards/>)} className={styles.menu_block_light}> <div >МОИ МЕСТА</div></button>
        <button onClick={() => setBlock(<MapsTest/>)} className={styles.menu_block_light}> <div >ДОБАВИТЬ МЕСТО</div></button>
        <button onClick={()=> setBlock(<EditProfile/>)} className={styles.menu_block_light}> <div >РЕДАКТИРОВАТЬ ПРОФИЛЬ </div> </button>
        <button onClick={()=> setBlock(<Support/>)} className={styles.menu_block_light}>  <div >ПОДДЕРЖКА</div></button>
      </div>

      <div className={styles.profile_page_var_light}>
         {block}
      </div>
  </div>}

  {!isLightTheme && <div className={styles.profile_page_container_dark}>
      <div className={styles.profile_page_menu_dark}>
        <button onClick={()=> setBlock(<UserCards/>)} className={styles.menu_block_dark}> <div >МОИ МЕСТА</div></button>
        <button onClick={()=> setBlock(<MapsTest/>)} className={styles.menu_block_dark}> <div >ДОБАВИТЬ МЕСТО</div></button>
        <button onClick={()=> setBlock(<EditProfile/>)} className={styles.menu_block_dark}> <div >РЕДАКТИРОВАТЬ ПРОФИЛЬ</div> </button>
        <button onClick={()=> setBlock(<Support/>)} className={styles.menu_block_dark}>  <div >ПОДДЕРЖКА</div></button>
      </div>
      <div className={styles.profile_page_var_dark}>
         {block}
      </div>
  </div>}
  
  </>

)




}

export default ProfilePage
