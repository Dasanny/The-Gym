import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="webtoon-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>Solo Leveling</li>
                    <li style={{ background: theme.ui }}>Wind Breaker</li>
                    <li style={{ background: theme.ui }}>Tower of God</li>
                </ul>
            </div>
        )
    }
}

export default BookList
