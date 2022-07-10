import React from 'react'
import "./nav.css"
import { BsFillPlayFill } from "react-icons/bs"
import { BsFillPauseFill } from "react-icons/bs"
import { BsCheck } from "react-icons/bs"
import { RiArrowRightSLine } from "react-icons/ri"
import { SiScrollreveal } from "react-icons/si"
import { BiShowAlt } from "react-icons/bi"
import check from "../../functions/check"
import newWord from "../../functions/newWord"
import reveal from "../../functions/reveal"
import playAudio from "../../functions/playAudio"
import stopAudio from "../../functions/stopAudio"

const Nav = () => {
  return (
    <nav>
      <a href="#" onClick={() => {check()}}><BsCheck /></a>
      <a href="#" onClick={() => {playAudio()}}><BsFillPlayFill /></a>
      <a href="#" onClick={() => {stopAudio()}}><BsFillPauseFill /></a>
      <a href="#" onClick={() => {newWord()}}><RiArrowRightSLine /></a>
      <a href="#" onClick={() => {reveal()}}><BiShowAlt /></a>
    </nav>
  )
}

export default Nav