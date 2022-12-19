import { createContext, useState } from 'react'

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#000000'
    }
}

//criando contexto
export const ThemeContext = createContext({})

//criando provider
//tenho as informações por meio do value
export const ThemeProvider = (props) => {
    
    const [ theme, setTheme ] = useState(themes.light)
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}> 
            {props.children}
        </ThemeContext.Provider>
    )
}