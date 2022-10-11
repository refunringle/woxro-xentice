import React from 'react'
import GP from "../../Assets/gp.png";
import AS from "../../Assets/as.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footHead">
          <div className="one">
            <h3>ABOUT</h3>
            <p>How Xentice Works</p>
            <p>Founders Letter</p>
            <p>News Room</p>
            <p>Investors</p>
            <p>Xentice Gold</p>
            <p>Xentice Platinum</p>
            <p>Startup Support</p>
            <p>Careers</p>
          </div>
          <div className="Two">
            <h3>EXPLORE</h3>
            <p>Diversity & Discrimination</p>
            <p>Accessibility</p>
            <p>Xentice Associates</p>
            <p>Xentice Team</p>
            <p>Xentice Mall</p>
            <p>Xstudio</p>
            <p>Xmoney</p>
            <p>Entice Spaces</p>
          </div>
          <div className="one">
            <h3>SERVICE</h3>
            <p>Buttons & Badges</p>
            <p>Mobile Apps</p>
            <p>For Companies</p>
            <p>Mobile Apps</p>
            <p>Review Professionals</p>
            <p>Suggested Professionals</p>
            <p>Resource Centre</p>
            <p>Community Centre</p>
          </div>
          <div className="one">
            <h3>SUPPORT</h3>
            <p>Our COVID-19 Response</p>
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Neighbourhood Support</p>
            <p>Corporate contact</p>
            <p>Trust & Safety</p>
            <p>FAQ</p>
            <p>Payment gateway</p>
          </div>
        </div>
        <div className="sectionLeft">
          <div className="sectionOne">
            <div>
              <h3>DESCLAIMER</h3>
              <p className="para">
                Please do not share your xentice password, Credit/Debit card
                pin, other confidential information with anyone even if he/she
                claims to be from xentice. We advise our customers to completely
                ignore such communications & report to us at
                support@xentice.com.
              </p>
            </div>
            <div className="available">
              <img src={GP}  alt="Google Playstore" />
              <img src={AS}  alt="Apple Store" />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <div className="copyrightLeft">
            <p>© Xentice Group of Companies 2022 . All Rights Reserved</p>
          </div>
          <div className="copyrightRight">
            <p>About</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer