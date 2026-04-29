import React from 'react'
import './footer.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
function Footera() {
  return (
    <>
    
      <div className='footera'>

        <div className='footeraUpside'>
          <div className='footeraUpsideLeft'>
            <h4 className='footerH4'>BORI ROOTS</h4>
            <p className='footerP1'>Premium organic olive oil from the verdant landscapes of Balochistan, crafted with tradition and care.</p>
          </div>
          <div className='footerLogo'>
            <div className='logoSec' >
              

              <a href="https://www.tiktok.com/@rayzmedia.com?_r=1&_t=ZS-95UE7wuPuOg"  target="_blank" rel="noopener noreferrer"><div className='log'><BiLogoTiktok /></div></a>
              <a href="https://www.instagram.com/rayzmedia?igsh=ODdkNXR1czV2dWox"  target="_blank" rel="noopener noreferrer"><div className='log'><FaInstagram /></div></a>
              <a href="https://www.linkedin.com/company/rayzmedia/?viewAsMember=true"  target="_blank" rel="noopener noreferrer"><div className='log'><TfiLinkedin  /></div></a>
              <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer"> <div className='log'><BiLogoGmail /></div></a>       



            </div>
            
          </div>
        </div>

          <div className='footerDown'>
            <div className='downSection'>
            <p>© 2026 Rayzmedia All Rights Reserved</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Refund Policy</p>
            </div>
          </div>
          </div>
        </div>
    
    
    
    </>
  )
}

export default Footera