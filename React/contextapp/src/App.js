import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <Booklist></Booklist>
          <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
