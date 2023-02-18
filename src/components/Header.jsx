import React, { useState } from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="hamburger">
                <img onClick={() => setMenu(true)} src={hamburger} alt="" className={menu ? "close" : "menu-icons open-menu"} />
                <img onClick={() => setMenu(false)} src={closeIcon} alt="" className={menu ? "open menu-icons close-menu" : "menu-icons close-menu"} />
            </div>
            <ul className={menu ? "nav-ul open" : "nav-ul"}>

                <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Home</a></li>
                <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Shop</a></li>
                <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">About</a></li>
                <li onClick={() => setMenu(false)} className="nav-li"><a href="" className="nav-link">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header