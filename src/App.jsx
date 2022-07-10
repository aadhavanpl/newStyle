import React from 'react'
import Buttons from './components/buttons/Buttons'
import Button from './components/buttons/Button'
import Nav from './components/nav/Nav'
import Result from './components/result/Result'
import "./index.css"

const App = () => {
  return (
    <>
        <div className='top'>
          <div id="float"><Buttons /></div>
          <div id="float"><Result /></div>
        </div>
        <Nav />
    </>
  )
}

export default App