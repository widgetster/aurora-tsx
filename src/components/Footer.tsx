import './Footer.css'


export function Footer() {

  return (

    <div className="ftr-bg">
      <div className="ftr-first-block">
        <div className="ftr-first-column-container">
          <div className="ftr-logo-name-container">
            <img className="site-logo" src="./icon/logo.png" alt="" />
            <p>AURORA</p>
          </div>

          <p className="ftr-description-p">We craft digital experiences that help brands grow and succeed in the modern world.</p>

          <div className="ftr-soc-med-container">
            <img src="./icon/facebook.png" />
            <img src="./icon/instagram.png" />
            <img src="./icon/linkedin.png" />
            <img src="./icon/twitter.png" />
          </div>
        </div>

        <div>
          <p className="ftr-title-link-p">Quick Links</p>

          <p className="ftr-link-p">Home</p>
          <p className="ftr-link-p">About Us</p>
          <p className="ftr-link-p">Services</p>
          <p className="ftr-link-p">Portfolio</p>
          <p className="ftr-link-p">Blog</p>
        </div>

        <div>
          <p className="ftr-title-link-p">Services</p>

          <p className="ftr-link-p">Web Design</p>
          <p className="ftr-link-p">Web Development</p>
          <p className="ftr-link-p">UI/UX Design</p>
          <p className="ftr-link-p">SEO Optimization</p>
          <p className="ftr-link-p">Maintenance</p>
        </div>

        <div className="ftr-contact">
          <p className="ftr-title-link-p">Contact Us</p>

          <p className="ftr-link-contact-newsletter-p">hello@aurora.com</p>
          <p className="ftr-link-contact-newsletter-p">+1 (010) 098 7654</p>
          <p className="ftr-link-contact-newsletter-p">32 Innovation Drive</p>
          <p className="ftr-link-contact-newsletter-p">Design City, AU 1098</p>

        </div>

        <div className="ftr-newsletter">
          <p className="ftr-title-link-p">Newsletter</p>

          <p className="ftr-link-contact-newsletter-p">Stay updated with our latest news and projects.</p>

          <div className="ftr-newsletter-controls">
            <input type="email" className="ftr-enter-email" aria-label="Email address" autoComplete="email" placeholder="Enter your email" />
            <button className="ftr-subscribe-button">Subscribe</button>
          </div>


        </div>
      </div>

      <p className="ftr-copyright">&copy; 2026 Aurora Studio. All rights reserved.</p>

    </div>

  )

}
