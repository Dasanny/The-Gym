import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContextext'

export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={ toggleTheme }>Toggle theme</button>
    )
}


