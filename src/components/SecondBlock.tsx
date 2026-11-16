import './SecondBlock.css'


export function SecondBlock() {

  return (
    <div className="second-block">
      <div className="container">
        <img className="icon" src="./icon/laptop.png" />

          <div className="feature-description">
            <p className="feature-p">Modern Design</p>
            <p className="description-p">Clean, user-friendly designs that impress and engage.</p>
          </div>
      </div>

      <div className="container">
        <img src="./icon/fast.png" />

          <div className="feature-description">
            <p className="feature-p">Fast Performance</p>
            <p className="description-p">Optimized for speed and built with best practices.</p>
          </div>
      </div>

      <div className="container">
        <img className="icon" src="./icon/cellphone.png" />

          <div className="feature-description">
            <p className="feature-p">Fully Responsive</p>
            <p className="description-p">Looks perfect in any device, from mobile to desktop.</p>
          </div>
      </div>

      <div className="container">
        <img className="icon" src="./icon/code.png" />

          <div className="feature-description">
            <p className="feature-p">Clean Code</p>
            <p className="description-p">Well-structured, maintainable and scalable code.</p>
          </div>
      </div>
    </div>
  )
}
