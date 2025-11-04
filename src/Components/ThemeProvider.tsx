
import React from 'react'
import { useState } from 'react';
export const ThemeContext=React.createContext();
const ThemeProvider = ({children}) => {
 
    const [theme,setTheme]=useState("light")
     
    const toggleTheme = () => {
        setTheme((prev) => (prev==="light" ? "dark" :"light"))
    }

    return(
        <>
        <ThemeContext.Provider value = {[theme,toggleTheme]}>
                             {children}
        </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider