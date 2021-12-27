import { createContext, useState, useContext, useEffect, useLocation } from "react";

const themeContext = createContext()

export function ThemeContextProvider({children}) {
  const [isLightTheme, setTheme] = useState(true)
  return (
    <themeContext.Provider value={{ isLightTheme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemeContext = () => useContext(themeContext)
