import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/sociallinks"

const Footer = () => {
  return (
    <footer className="footer font-small mt-2">
      <div className="footer-copyright text-center py-3">
        <div>
          <SocialLinks styleClass="footer-links"></SocialLinks>
        </div>
        <div className="site-links">
          <Link className="menu-link" to="/about/shipping/">Packing & Shipping</Link>
          <Link className="menu-link" to="/about/returns/">Return Policy</Link>
          <Link className="" to="/privacy-policy/">Privacy Policy</Link>
          <Link className="" to="/terms/">Terms & Conditions</Link>
          <Link className="menu-link" to="/about/contact/">Contact</Link>
        </div>
        <div className="bottom-line">
          <div>
            <span className="muted">Created by&nbsp;</span>
            <a href="https://patrickjamieson.com" target="_blank" rel="noopener noreferrer">
              Patrick Jamieson
            </a>
          </div>
          <span className="muted">
            Copyright © {new Date().getFullYear()} UltraportableTypewriters.com</span>
          <span className="muted"> All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
