import React from 'react'
import "./nav.css"
import { BsFillPlayFill } from "react-icons/bs"
import { BsFillPauseFill } from "react-icons/bs"
import { BsCheck } from "react-icons/bs"
import { RiArrowRightSLine } from "react-icons/ri"
import { SiScrollreveal } from "react-icons/si"

const Nav = () => {
  return (
    <nav>
      <a href="#" ><BsCheck /></a>
      <a href="#" ><BsFillPlayFill /></a>
      <a href="#" ><BsFillPauseFill /></a>
      <a href="#" ><RiArrowRightSLine /></a>
      <a href="#" ><SiScrollreveal /></a>
    </nav>
  )
}

export default Nav