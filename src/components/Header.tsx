import { useId, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const menuButton = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen && menuButton.current?.getClientRects().length) {
          closeMenu()
          menuButton.current.focus()
        }
      }}
    >
      <div className="header">
        <Link className="header-brand" to="/" onClick={closeMenu}>
          <img className="site-logo" src={`${import.meta.env.BASE_URL}icon/logo.png`} alt="" />
          AURORA
        </Link>

        <button
          className="header-menu-toggle"
          type="button"
          ref={menuButton}
          aria-controls={menuId}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="header-menu-icon" aria-hidden="true" />
          Menu
        </button>

        <nav className="header-nav" id={menuId} aria-label="Main navigation" data-open={menuOpen}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
          <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <Link className="get-started-button header-mobile-cta" to="/contact" onClick={closeMenu}>
            Get Started
          </Link>
        </nav>

        <Link className="get-started-button header-desktop-cta" to="/contact" onClick={closeMenu}>
          Get Started
        </Link>
      </div>
    </header>
  )
}
