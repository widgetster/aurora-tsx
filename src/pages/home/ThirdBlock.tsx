import './ThirdBlock.css'

export function ThirdBlock() {
  return (
    <section className="third-block-bg" aria-labelledby="projects-title">
      <div className="third-block">
        <p className="our-work-p">OUR WORK</p>
        <h2 className="featured-projects-title" id="projects-title">Featured Projects</h2>

        <div className="featured-projects-container">
          <article className="project-container">
            <img className="project-img" src="./picture/travel.png" alt="" />
            <div className="project-copy">
              <h3 className="project-title">Travel Landing Page</h3>
              <p className="project-description-p">A modern landing page for a travel agency.</p>
            </div>
          </article>

          <article className="project-container">
            <img className="project-img" src="./picture/banking.png" alt="" />
            <div className="project-copy">
              <h3 className="project-title">Banking Dashboard</h3>
              <p className="project-description-p">Dashboard design for personal finance management.</p>
            </div>
          </article>

          <article className="project-container">
            <img className="project-img" src="./picture/ecommerce.png" alt="" />
            <div className="project-copy">
              <h3 className="project-title">E-commerce Store</h3>
              <p className="project-description-p">Online store for a modern lifestyle brand.</p>
            </div>
          </article>

          <article className="project-container">
            <img className="project-img" src="./picture/tech.png" alt="" />
            <div className="project-copy">
              <h3 className="project-title">Tech Blog</h3>
              <p className="project-description-p">Clean and minimalist blog layout for tech enthusiasts.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
