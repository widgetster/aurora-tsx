import './ThirdBlock.css'


export function ThirdBlock() {

  return (
    <div className="third-block-bg">
      <div className="third-block">
        <p className="our-work-p">OUR WORK</p>
        <p className="featured-projects-p">Featured Projects</p>

        <div className="featured-projects-container">
          <div className="project-container">
            <img className="project-img" src="/picture/travel.png" />
              <p className="project-name-p">Travel Landing Page</p>
              <p className="project-description-p">A modern landing page for a travel agency.</p>

              <div className="project-number">
                1
              </div>
          </div>

          <div className="project-container">
            <img className="project-img" src="/picture/banking.png" />
              <p className="project-name-p">Banking Dashboard</p>
              <p className="project-description-p">Dashboard design for personal finance management.</p>

              <div className="project-number">
                2
              </div>
          </div>

          <div className="project-container">
            <img className="project-img" src="/picture/ecommerce.png" />
              <p className="project-name-p">E-commerce Store</p>
              <p className="project-description-p">Online store for a modern lifestyle brand.</p>

              <div className="project-number">
                3
              </div>
          </div>

          <div className="project-container">
            <img className="project-img" src="/picture/tech.png" />
              <p className="project-name-p">Tech Blog</p>
              <p className="project-description-p">Clean and minimalist blog layout for tech enthusiasts.</p>

              <div className="project-number">
                4
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}