import './Header.css'
import {Link} from 'react-router';

export function Header() {
  return (

    <header>
      <div className="header">
        <div className="left">
          <img src="./icon/logo.png" />

          <p>AURORA</p>
        </div>

        <div className="middle">
          <Link to="/">Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/services"> Services</Link>
          <Link to="/services"> Portfolio</Link>
          <Link to="/blog"> Blog</Link>
          <Link to="/contact"> Contact</Link>
      
        </div>

        <div className="right">
          <button>Get Started</button>
        </div>
      </div>
    </header>

  )

}
