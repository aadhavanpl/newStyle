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
          <Result />
          <Buttons />
        </div>
        <Nav />
    </>
  )
}

export default App