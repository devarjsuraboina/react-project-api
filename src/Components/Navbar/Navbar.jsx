import React, { useState } from 'react'
import "./Navbar.css"
import {FaTimes, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

const [click,setClick]=useState(false)


const handleClick=()=>{
    setClick(!click)
}

    return (
        <nav>   
            <div className='logo'>
            <h1 className='nav-head'>Fashion <span>Era</span></h1>

            </div>
            <div className={click ? "links active" :"links"}>
               <Link className='aa' to="/" >Home</Link>
               <Link className='aa' to="/mens" >Men</Link>
               <Link className='aa'to="/women" >Women</Link>
               <Link className='aa'to="/kids" >Kids</Link>

            </div>
            <div className='humBurger' onClick={handleClick}>
               {
                click ? <FaTimes size={25}></FaTimes> : <FaBars size={25}></FaBars>

               }
            </div>
        </nav>
    )
}

export default Navbar