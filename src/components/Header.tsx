import './Header.css'

export function Header() {
  return (
    <header>
      <div className="header">
        <div className="left">
          <img src="./icon/logo.png" />

          <p>AURORA</p>
        </div>

        <div className="middle">
          <div><p>Home</p></div>
          <div><p>About</p></div>
          <div><p>Services</p></div>
          <div><p>Portfolio</p></div>
          <div><p>Blog</p></div>
          <div><p>Contact</p></div>
        </div>

        <div className="right">
          <button>Get Started</button>
        </div>
      </div>
    </header>
  )

}
