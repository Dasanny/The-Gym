import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

import {
  BrowserRouter as Linky,
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Linky>
                <div className="App">
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/About' component={About}></Route>
                        <Route path='/Contact' component={Contact}></Route>
                        <Route path='/:post_id' component={Post}></Route>
                    </Switch>
                </div>
            </Linky>

        )
    }
}

export default App;