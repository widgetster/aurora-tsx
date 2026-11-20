import './FirstBlock.css'

export function FirstBlock() {
  return (
    <section className="first-block-bg" aria-labelledby="home-title">
      <div className="first-block-content">
        <div>
          <p className="build-p">BUILDING DIGITAL EXPERIENCES</p>
          <h1 className="hero-title" id="home-title">We Create Beautiful Web Experiences</h1>
          <p className="aurora-is-p">
            Aurora is a digital studio focused on building modern, responsive websites and web applications.
          </p>

          <div className="first-block-buttons">
            <button className="view-our-work-button" type="button">View Our Work</button>
            <button className="learn-more-button" type="button">Learn More</button>
          </div>
        </div>

        <img className="mountain-img" src="./picture/mountain.png" width="1536" height="937" alt="Mountain landscape" />
      </div>
    </section>
  )
}
