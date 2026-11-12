import './FirstBlock.css'


export function FirstBlock() {

  return (
    <>

      <div className="first-block-bg">
        <div className="first-block-content">
          <div className="first-block">
            <p className="build-p">
              BUILDING DIGITAL EXPERIENCES
            </p>

            <p className="we-create-p">
              We Create Beautiful Web Experiences
            </p>

            <p className="aurora-is-p">
              Aurora is a digital studio focused on building modern, responsivewebsites and web applications.
            </p>

            <div className="first-block-buttons">
              <button className="view-our-work-button">View Our Work</button>
              <button className="learn-more-button">Learn More</button>

            </div>

          </div>

          <div className="mountain-img-container">
            <img className="mountain-img" src="/picture/mountain.png" alt="Mountain landscape" />
          </div>
        </div>
      </div>
    </>
  )
}
