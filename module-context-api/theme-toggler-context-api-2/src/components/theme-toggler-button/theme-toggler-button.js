import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import { Button } from '../button/button'

export const ThemeTogglerButton = () => {

    const { themes } = useContext(ThemeContext)

    return(
        <div>
            <Button>Clique Aqui</Button>
        </div>
    )
}