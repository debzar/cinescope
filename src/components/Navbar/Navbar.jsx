import React from 'react'
import { Nav, NavContainer, NavTitle, LinkWrapper } from './Navbar.styles'
function Navbar() {
  return (
    <nav className={Nav}>
        <div className={NavContainer}>
            <div className={NavTitle}>Cine Scope</div>
            <div className={LinkWrapper}>
                <a href="#" className="hover:underline">Películas</a>
                <a href="#" className="hover:underline">Series</a>
                <a href="#" className="hover:underline">Personas</a>
                <a href="#" className="hover:underline">Más</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar