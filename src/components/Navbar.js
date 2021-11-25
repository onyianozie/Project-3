// import React,{useState} from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'



const Navbar = () => {
    return (
        <nav className="NavbarItems">
           <h4 className="navbar-logo">React Camp<i className="fab fa-react"></i></h4>
           <div className="menu-icon">
           </div>
           <ul>
               {MenuItems.map((item, index)=>{
                   return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>{item.title}</a>
                    </li>
                   )
               })}
               
           </ul>
        </nav>
    )
}

export default Navbar
