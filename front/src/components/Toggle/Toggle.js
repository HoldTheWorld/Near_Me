import styles from './toggle.module.css'
import SwitchSelector from "react-switch-selector";
import { useThemeContext } from '../../context/themeContext'

function Toggle() {
    const { isLightTheme , setTheme} = useThemeContext()
    const options = [
      {
          value: true,
          selectedBackgroundColor: "#D4145A",
      },
      {
          value: false,
          selectedBackgroundColor: "#28094e"
      }
    ];
    let initialSelectedIndex = options.findIndex(({value}) => value === isLightTheme);
    const onChange = async (newValue) => {
        setTheme(newValue);
    };
  
return (
    <div className={styles.toggle} >
    <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={"#FFFFFF"}
        fontColor={"#f5f6fa"}
    />
   </div>
  )
}

export default Toggle
