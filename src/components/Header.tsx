import './Header.css'
import { Link, NavLink } from 'react-router';

export function Header() {
  return (

    <header>
      <div className="header">
        <Link to="/">
          <div className="left">
            <img src="./icon/logo.png" />

            <p>AURORA</p>
          </div>
        </Link>


        <div className="middle">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/services"> Services</NavLink>
          <NavLink to="/portfolio"> Portfolio</NavLink>
          <NavLink to="/blog"> Blog</NavLink>
          <NavLink to="/contact"> Contact</NavLink>

        </div>

        <div className="right">
          <button>Get Started</button>
        </div>
      </div>
    </header>

  )

}
