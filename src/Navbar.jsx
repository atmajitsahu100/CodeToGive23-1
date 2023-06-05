import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from './assets/icons/hamburger.svg'
import { ReactComponent as Brand } from './assets/icons/logo1.svg'
import './Navbar1.css'
//import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
          <Brand />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Our Works</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Upcoming Events</NavLink>
            </li>
            <li>
              <NavLink to="/About-Us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar