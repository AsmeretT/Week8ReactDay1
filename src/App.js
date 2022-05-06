import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import { Route, Routes } from 'react-router-dom'
import SignIn from './views/SignIn'

export default class App extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        {/* {<h1> This is the main app </h1>} */}

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/about' element={<SignIn />}/>
        </Routes>
      </div>
    )
  }
}

