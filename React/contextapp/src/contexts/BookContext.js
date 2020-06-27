import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
            {title: 'Solo Leveling', id: 1},
            {title: 'Wind Breaker', id: 2},
            {title: 'Tower of God', id: 3},
            {title: 'GOSU', id: 4},
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}