import React from 'react'
import "./buttons.css"
import check from "../../functions/check"
import userAns from "../../functions/userAns"
import randomWords from '../../functions/random'

export var usersAns = {value: ""}
export var finalAns = {value: randomWords()}

const Buttons = () => {
  return (
    <div className='allButtons'>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ஃ')}}>ஃ</button>
            <button className='btn' onClick={() => {userAns('அ')}}>அ</button>
            <button className='btn' onClick={() => {userAns('ஆ')}}>ஆ</button>
            <button className='btn' onClick={() => {userAns('இ')}}>இ</button>
            <button className='btn' onClick={() => {userAns('ஈ')}}>ஈ</button>
            <button className='btn' onClick={() => {userAns('உ')}}>உ</button>
            <button className='btn' onClick={() => {userAns('ஊ')}}>ஊ</button>
            <button className='btn' onClick={() => {userAns('எ')}}>எ</button>
            <button className='btn' onClick={() => {userAns('ஏ')}}>ஏ</button>
            <button className='btn' onClick={() => {userAns('ஐ')}}>ஐ</button>
            <button className='btn' onClick={() => {userAns('ஒ')}}>ஒ</button>
            <button className='btn' onClick={() => {userAns('ஓ')}}>ஓ</button>
            <button className='btn' onClick={() => {userAns('ஔ')}}>ஔ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('க்')}}>க்</button>
            <button className='btn' onClick={() => {userAns('க')}}>க</button>
            <button className='btn' onClick={() => {userAns('கா')}}>கா</button>
            <button className='btn' onClick={() => {userAns('கி')}}>கி</button>
            <button className='btn' onClick={() => {userAns('கீ')}}>கீ</button>
            <button className='btn' onClick={() => {userAns('கு')}}>கு</button>
            <button className='btn' onClick={() => {userAns('கூ')}}>கூ</button>
            <button className='btn' onClick={() => {userAns('கெ')}}>கெ</button>
            <button className='btn' onClick={() => {userAns('கே')}}>கே</button>
            <button className='btn' onClick={() => {userAns('கை')}}>கை</button>
            <button className='btn' onClick={() => {userAns('கொ')}}>கொ</button>
            <button className='btn' onClick={() => {userAns('கோ')}}>கோ</button>
            <button className='btn' onClick={() => {userAns('கௌ')}}>கௌ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ங்')}}>ங்</button>
            <button className='btn' onClick={() => {userAns('ங')}}>ங</button>
            <button className='btn' onClick={() => {userAns('ஙா')}}>ஙா</button>
            <button className='btn' onClick={() => {userAns('ஙி')}}>ஙி</button>
            <button className='btn' onClick={() => {userAns('ஙீ')}}>ஙீ</button>
            <button className='btn' onClick={() => {userAns('ஙு')}}>ஙு</button>
            <button className='btn' onClick={() => {userAns('ஙூ')}}>ஙூ</button>
            <button className='btn' onClick={() => {userAns('ஙெ')}}>ஙெ</button>
            <button className='btn' onClick={() => {userAns('ஙே')}}>ஙே</button>
            <button className='btn' onClick={() => {userAns('ஙை')}}>ஙை</button>
            <button className='btn' onClick={() => {userAns('ஙொ')}}>ஙொ</button>
            <button className='btn' onClick={() => {userAns('ஙோ')}}>ஙோ</button>
            <button className='btn' onClick={() => {userAns('ஙௌ')}}>ஙௌ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ச்')}}>ச்</button>
            <button className='btn' onClick={() => {userAns('ச')}}>ச</button>
            <button className='btn' onClick={() => {userAns('சா')}}>சா</button>
            <button className='btn' onClick={() => {userAns('சி')}}>சி</button>
            <button className='btn' onClick={() => {userAns('சீ')}}>சீ</button>
            <button className='btn' onClick={() => {userAns('சு')}}>சு</button>
            <button className='btn' onClick={() => {userAns('சூ')}}>சூ</button>
            <button className='btn' onClick={() => {userAns('செ')}}>செ</button>
            <button className='btn' onClick={() => {userAns('சே')}}>சே</button>
            <button className='btn' onClick={() => {userAns('சை')}}>சை</button>
            <button className='btn' onClick={() => {userAns('சொ')}}>சொ</button>
            <button className='btn' onClick={() => {userAns('சோ')}}>சோ</button>
            <button className='btn' onClick={() => {userAns('சௌ')}}>சௌ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ஞ்')}}>ஞ்</button>
            <button className='btn' onClick={() => {userAns('ஞ')}}>ஞ</button>
            <button className='btn' onClick={() => {userAns('ஞா')}}>ஞா</button>
            <button className='btn' onClick={() => {userAns('ஞி')}}>ஞி</button>
            <button className='btn' onClick={() => {userAns('ஞீ')}}>ஞீ</button>
            <button className='btn' onClick={() => {userAns('ஞு')}}>ஞு</button>
            <button className='btn' onClick={() => {userAns('ஞூ')}}>ஞூ</button>
            <button className='btn' onClick={() => {userAns('ஞெ')}}>ஞெ</button>
            <button className='btn' onClick={() => {userAns('ஞே')}}>ஞே</button>
            <button className='btn' onClick={() => {userAns('ஞை')}}>ஞை</button>
            <button className='btn' onClick={() => {userAns('ஞொ')}}>ஞொ</button>
            <button className='btn' onClick={() => {userAns('ஞோ')}}>ஞோ</button>
            <button className='btn' onClick={() => {userAns('ஞௌ')}}>ஞௌ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ட்')}}>ட்</button>
            <button className='btn' onClick={() => {userAns('ட')}}>ட</button>
            <button className='btn' onClick={() => {userAns('டா')}}>டா</button>
            <button className='btn' onClick={() => {userAns('டி')}}>டி</button>
            <button className='btn' onClick={() => {userAns('டீ')}}>டீ</button>
            <button className='btn' onClick={() => {userAns('டு')}}>டு</button>
            <button className='btn' onClick={() => {userAns('டூ')}}>டூ</button>
            <button className='btn' onClick={() => {userAns('டெ')}}>டெ</button>
            <button className='btn' onClick={() => {userAns('டே')}}>டே</button>
            <button className='btn' onClick={() => {userAns('டை')}}>டை</button>
            <button className='btn' onClick={() => {userAns('டொ')}}>டொ</button>
            <button className='btn' onClick={() => {userAns('டோ')}}>டோ</button>
            <button className='btn' onClick={() => {userAns('டௌ')}}>டௌ</button>
        </div>
        <div className='rows'>
            <button className='btn' onClick={() => {userAns('ண்')}}>ண்</button>
            <button className='btn' onClick={() => {userAns('ண')}}>ண</button>
            <button className='btn' onClick={() => {userAns('ணா')}}>ணா</button>
            <button className='btn' onClick={() => {userAns('ணி')}}>ணி</button>
            <button className='btn' onClick={() => {userAns('ணீ')}}>ணீ</button>
            <button className='btn' onClick={() => {userAns('ணு')}}>ணு</button>
            <button className='btn' onClick={() => {userAns('ணூ')}}>ணூ</button>
            <button className='btn' onClick={() => {userAns('ணெ')}}>ணெ</button>
            <button className='btn' onClick={() => {userAns('ணே')}}>ணே</button>
            <button className='btn' onClick={() => {userAns('ணை')}}>ணை</button>
            <button className='btn' onClick={() => {userAns('ணொ')}}>ணொ</button>
            <button className='btn' onClick={() => {userAns('ணோ')}}>ணோ</button>
            <button className='btn' onClick={() => {userAns('ணௌ')}}>ணௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('த்')}}>த்</button>
            <button className='btn' onClick={() => {userAns('த')}}>த</button>
            <button className='btn' onClick={() => {userAns('தா')}}>தா</button>
            <button className='btn' onClick={() => {userAns('தி')}}>தி</button>
            <button className='btn' onClick={() => {userAns('தீ')}}>தீ</button>
            <button className='btn' onClick={() => {userAns('து')}}>து</button>
            <button className='btn' onClick={() => {userAns('தூ')}}>தூ</button>
            <button className='btn' onClick={() => {userAns('தெ')}}>தெ</button>
            <button className='btn' onClick={() => {userAns('தே')}}>தே</button>
            <button className='btn' onClick={() => {userAns('தை')}}>தை</button>
            <button className='btn' onClick={() => {userAns('தொ')}}>தொ</button>
            <button className='btn' onClick={() => {userAns('தோ')}}>தோ</button>
            <button className='btn' onClick={() => {userAns('தௌ')}}>தௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ந்')}}>ந்</button>
            <button className='btn' onClick={() => {userAns('ந')}}>ந</button>
            <button className='btn' onClick={() => {userAns('நா')}}>நா</button>
            <button className='btn' onClick={() => {userAns('நி')}}>நி</button>
            <button className='btn' onClick={() => {userAns('நீ')}}>நீ</button>
            <button className='btn' onClick={() => {userAns('நு')}}>நு</button>
            <button className='btn' onClick={() => {userAns('நூ')}}>நூ</button>
            <button className='btn' onClick={() => {userAns('நெ')}}>நெ</button>
            <button className='btn' onClick={() => {userAns('நே')}}>நே</button>
            <button className='btn' onClick={() => {userAns('நை')}}>நை</button>
            <button className='btn' onClick={() => {userAns('நொ')}}>நொ</button>
            <button className='btn' onClick={() => {userAns('நோ')}}>நோ</button>
            <button className='btn' onClick={() => {userAns('நௌ')}}>நௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ப்')}}>ப்</button>
            <button className='btn' onClick={() => {userAns('ப')}}>ப</button>
            <button className='btn' onClick={() => {userAns('பா')}}>பா</button>
            <button className='btn' onClick={() => {userAns('பி')}}>பி</button>
            <button className='btn' onClick={() => {userAns('பீ')}}>பீ</button>
            <button className='btn' onClick={() => {userAns('பு')}}>பு</button>
            <button className='btn' onClick={() => {userAns('பூ')}}>பூ</button>
            <button className='btn' onClick={() => {userAns('பெ')}}>பெ</button>
            <button className='btn' onClick={() => {userAns('பே')}}>பே</button>
            <button className='btn' onClick={() => {userAns('பை')}}>பை</button>
            <button className='btn' onClick={() => {userAns('பொ')}}>பொ</button>
            <button className='btn' onClick={() => {userAns('போ')}}>போ</button>
            <button className='btn' onClick={() => {userAns('பௌ')}}>பௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ம்')}}>ம்</button>
            <button className='btn' onClick={() => {userAns('ம')}}>ம</button>
            <button className='btn' onClick={() => {userAns('மா')}}>மா</button>
            <button className='btn' onClick={() => {userAns('மி')}}>மி</button>
            <button className='btn' onClick={() => {userAns('மீ')}}>மீ</button>
            <button className='btn' onClick={() => {userAns('மு')}}>மு</button>
            <button className='btn' onClick={() => {userAns('மூ')}}>மூ</button>
            <button className='btn' onClick={() => {userAns('மெ')}}>மெ</button>
            <button className='btn' onClick={() => {userAns('மே')}}>மே</button>
            <button className='btn' onClick={() => {userAns('மை')}}>மை</button>
            <button className='btn' onClick={() => {userAns('மொ')}}>மொ</button>
            <button className='btn' onClick={() => {userAns('மோ')}}>மோ</button>
            <button className='btn' onClick={() => {userAns('மௌ')}}>மௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ய்')}}>ய்</button>
            <button className='btn' onClick={() => {userAns('ய')}}>ய</button>
            <button className='btn' onClick={() => {userAns('யா')}}>யா</button>
            <button className='btn' onClick={() => {userAns('யி')}}>யி</button>
            <button className='btn' onClick={() => {userAns('யீ')}}>யீ</button>
            <button className='btn' onClick={() => {userAns('யு')}}>யு</button>
            <button className='btn' onClick={() => {userAns('யூ')}}>யூ</button>
            <button className='btn' onClick={() => {userAns('யெ')}}>யெ</button>
            <button className='btn' onClick={() => {userAns('யே')}}>யே</button>
            <button className='btn' onClick={() => {userAns('யை')}}>யை</button>
            <button className='btn' onClick={() => {userAns('யொ')}}>யொ</button>
            <button className='btn' onClick={() => {userAns('யோ')}}>யோ</button>
            <button className='btn' onClick={() => {userAns('யௌ')}}>யௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ர்')}}>ர்</button>
            <button className='btn' onClick={() => {userAns('ர')}}>ர</button>
            <button className='btn' onClick={() => {userAns('ரா')}}>ரா</button>
            <button className='btn' onClick={() => {userAns('ரி')}}>ரி</button>
            <button className='btn' onClick={() => {userAns('ரீ')}}>ரீ</button>
            <button className='btn' onClick={() => {userAns('ரு')}}>ரு</button>
            <button className='btn' onClick={() => {userAns('ரூ')}}>ரூ</button>
            <button className='btn' onClick={() => {userAns('ரெ')}}>ரெ</button>
            <button className='btn' onClick={() => {userAns('ரே')}}>ரே</button>
            <button className='btn' onClick={() => {userAns('ரை')}}>ரை</button>
            <button className='btn' onClick={() => {userAns('ரொ')}}>ரொ</button>
            <button className='btn' onClick={() => {userAns('ரோ')}}>ரோ</button>
            <button className='btn' onClick={() => {userAns('ரௌ')}}>ரௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ல்')}}>ல்</button>
            <button className='btn' onClick={() => {userAns('ல')}}>ல</button>
            <button className='btn' onClick={() => {userAns('லா')}}>லா</button>
            <button className='btn' onClick={() => {userAns('லி')}}>லி</button>
            <button className='btn' onClick={() => {userAns('லீ')}}>லீ</button>
            <button className='btn' onClick={() => {userAns('லு')}}>லு</button>
            <button className='btn' onClick={() => {userAns('லூ')}}>லூ</button>
            <button className='btn' onClick={() => {userAns('லெ')}}>லெ</button>
            <button className='btn' onClick={() => {userAns('லே')}}>லே</button>
            <button className='btn' onClick={() => {userAns('லை')}}>லை</button>
            <button className='btn' onClick={() => {userAns('லொ')}}>லொ</button>
            <button className='btn' onClick={() => {userAns('லோ')}}>லோ</button>
            <button className='btn' onClick={() => {userAns('லௌ')}}>லௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('வ்')}}>வ்</button>
            <button className='btn' onClick={() => {userAns('வ')}}>வ</button>
            <button className='btn' onClick={() => {userAns('வா')}}>வா</button>
            <button className='btn' onClick={() => {userAns('வி')}}>வி</button>
            <button className='btn' onClick={() => {userAns('வீ')}}>வீ</button>
            <button className='btn' onClick={() => {userAns('வு')}}>வு</button>
            <button className='btn' onClick={() => {userAns('வூ')}}>வூ</button>
            <button className='btn' onClick={() => {userAns('வெ')}}>வெ</button>
            <button className='btn' onClick={() => {userAns('வே')}}>வே</button>
            <button className='btn' onClick={() => {userAns('வை')}}>வை</button>
            <button className='btn' onClick={() => {userAns('வொ')}}>வொ</button>
            <button className='btn' onClick={() => {userAns('வோ')}}>வோ</button>
            <button className='btn' onClick={() => {userAns('வௌ')}}>வௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ழ்')}}>ழ்</button>
            <button className='btn' onClick={() => {userAns('ழ')}}>ழ</button>
            <button className='btn' onClick={() => {userAns('ழா')}}>ழா</button>
            <button className='btn' onClick={() => {userAns('ழி')}}>ழி</button>
            <button className='btn' onClick={() => {userAns('ழீ')}}>ழீ</button>
            <button className='btn' onClick={() => {userAns('ழு')}}>ழு</button>
            <button className='btn' onClick={() => {userAns('ழூ')}}>ழூ</button>
            <button className='btn' onClick={() => {userAns('ழெ')}}>ழெ</button>
            <button className='btn' onClick={() => {userAns('ழே')}}>ழே</button>
            <button className='btn' onClick={() => {userAns('ழை')}}>ழை</button>
            <button className='btn' onClick={() => {userAns('ழொ')}}>ழொ</button>
            <button className='btn' onClick={() => {userAns('ழோ')}}>ழோ</button>
            <button className='btn' onClick={() => {userAns('ழௌ')}}>ழௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ள்')}}>ள்</button>
            <button className='btn' onClick={() => {userAns('ள')}}>ள</button>
            <button className='btn' onClick={() => {userAns('ளா')}}>ளா</button>
            <button className='btn' onClick={() => {userAns('ளி')}}>ளி</button>
            <button className='btn' onClick={() => {userAns('ளீ')}}>ளீ</button>
            <button className='btn' onClick={() => {userAns('ளு')}}>ளு</button>
            <button className='btn' onClick={() => {userAns('ளூ')}}>ளூ</button>
            <button className='btn' onClick={() => {userAns('ளெ')}}>ளெ</button>
            <button className='btn' onClick={() => {userAns('ளே')}}>ளே</button>
            <button className='btn' onClick={() => {userAns('ளை')}}>ளை</button>
            <button className='btn' onClick={() => {userAns('ளொ')}}>ளொ</button>
            <button className='btn' onClick={() => {userAns('ளோ')}}>ளோ</button>
            <button className='btn' onClick={() => {userAns('ளௌ')}}>ளௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ற்')}}>ற்</button>
            <button className='btn' onClick={() => {userAns('ற')}}>ற</button>
            <button className='btn' onClick={() => {userAns('றா')}}>றா</button>
            <button className='btn' onClick={() => {userAns('றி')}}>றி</button>
            <button className='btn' onClick={() => {userAns('றீ')}}>றீ</button>
            <button className='btn' onClick={() => {userAns('று')}}>று</button>
            <button className='btn' onClick={() => {userAns('றூ')}}>றூ</button>
            <button className='btn' onClick={() => {userAns('றெ')}}>றெ</button>
            <button className='btn' onClick={() => {userAns('றே')}}>றே</button>
            <button className='btn' onClick={() => {userAns('றை')}}>றை</button>
            <button className='btn' onClick={() => {userAns('றொ')}}>றொ</button>
            <button className='btn' onClick={() => {userAns('றோ')}}>றோ</button>
            <button className='btn' onClick={() => {userAns('றௌ')}}>றௌ</button>
        </div>
        <div>
            <button className='btn' onClick={() => {userAns('ன்')}}>ன்</button>
            <button className='btn' onClick={() => {userAns('ன')}}>ன</button>
            <button className='btn' onClick={() => {userAns('னா')}}>னா</button>
            <button className='btn' onClick={() => {userAns('னி')}}>னி</button>
            <button className='btn' onClick={() => {userAns('னீ')}}>னீ</button>
            <button className='btn' onClick={() => {userAns('னு')}}>னு</button>
            <button className='btn' onClick={() => {userAns('னூ')}}>னூ</button>
            <button className='btn' onClick={() => {userAns('னெ')}}>னெ</button>
            <button className='btn' onClick={() => {userAns('னே')}}>னே</button>
            <button className='btn' onClick={() => {userAns('னை')}}>னை</button>
            <button className='btn' onClick={() => {userAns('னொ')}}>னொ</button>
            <button className='btn' onClick={() => {userAns('னோ')}}>னோ</button>
            <button className='btn' onClick={() => {userAns('னௌ')}}>னௌ</button>
        </div>
    </div>

//     return (
//         <buttons>
//             <div className='rows'>   
//                 <button className='btn'>அ</button> 
//                 <button className='btn'>ஆ</button>   
//                 <button className='btn'>இ</button> 
//                 <button className='btn'>ஈ</button>   
//                 <button className='btn'>உ</button> 
//                 <button className='btn'>ஊ</button>   
//                 <button className='btn'>எ</button> 
//                 <button className='btn'>ஏ</button>   
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//             </div>
//             <div className='rows'>   
//                 <button className='btn'>க</button> 
//                 <button className='btn'>ங</button>   
//                 <button className='btn'>ச</button> 
//                 <button className='btn'>ஞ</button>   
//                 <button className='btn'>ட</button> 
//                 <button className='btn'>ண</button>   
//                 <button className='btn'>த</button> 
//                 <button className='btn'>ந</button>   
//                 <button className='btn'>ப</button> 
//                 <button className='btn'>ம</button>   
//                 <button className='btn'>ய</button> 
//                 <button className='btn'>ர</button>   
//                 <button className='btn'>ல</button> 
//                 <button className='btn'>வ</button> 
//                 <button className='btn'>ழ</button>   
//                 <button className='btn'>ள</button> 
//                 <button className='btn'>ற</button>   
//                 <button className='btn'>ன</button>
//             </div>
//             <div>   
//             <button className='btn'>அ</button> 
//                 <button className='btn'>ஆ</button>   
//                 <button className='btn'>இ</button> 
//                 <button className='btn'>ஈ</button>   
//                 <button className='btn'>உ</button> 
//                 <button className='btn'>ஊ</button>   
//                 <button className='btn'>எ</button> 
//                 <button className='btn'>ஏ</button>   
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button>
//             </div>
//             <div>   
//             <button className='btn'>அ</button> 
//                 <button className='btn'>ஆ</button>   
//                 <button className='btn'>இ</button> 
//                 <button className='btn'>ஈ</button>   
//                 <button className='btn'>உ</button> 
//                 <button className='btn'>ஊ</button>   
//                 <button className='btn'>எ</button> 
//                 <button className='btn'>ஏ</button>   
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//             </div>
//             <div>   
//             <button className='btn'>அ</button> 
//                 <button className='btn'>ஆ</button>   
//                 <button className='btn'>இ</button> 
//                 <button className='btn'>ஈ</button>   
//                 <button className='btn'>உ</button> 
//                 <button className='btn'>ஊ</button>   
//                 <button className='btn'>எ</button> 
//                 <button className='btn'>ஏ</button>   
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//             </div>
//             <div>   
//                 <button className='btn'>அ</button> 
//                 <button className='btn'>ஆ</button>   
//                 <button className='btn'>இ</button> 
//                 <button className='btn'>ஈ</button>   
//                 <button className='btn'>உ</button> 
//                 <button className='btn'>ஊ</button>   
//                 <button className='btn'>எ</button> 
//                 <button className='btn'>ஏ</button>   
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//                 <button className='btn'>ஐ</button> 
//                 <button className='btn'>ஒ</button>   
//                 <button className='btn'>ஓ</button> 
//                 <button className='btn'>ஔ</button>   
//                 <button className='btn'>ஃ</button> 
//             </div>
//         </buttons>
    
//   )
    )
}

export default Buttons


















