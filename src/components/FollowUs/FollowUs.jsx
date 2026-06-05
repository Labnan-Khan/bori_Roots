import React from 'react'
import './followUs.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
import { FiMessageSquare } from 'react-icons/fi'
import { MdGroups, MdOutlineMail } from 'react-icons/md'
import { BsLockFill } from 'react-icons/bs'
import { GiStrong } from 'react-icons/gi'
function FollowUs() {
  return (
    <>
    
    
        <div className='follUs'>
          <h1 className='startingH1tag'>Join the Journey</h1>
          <p className='ptagAfterH1tag'>Become part of the Bori Roots family. Subscribe for updates, 
            share your stories, and help us grow our community.
          </p>

          <div className='plusPointsSec'>

            <div className='ppCard'>
              <div className='ppCardLogo'><MdOutlineMail /> </div>
              <div className='ppCardDetails'>
                <h5>Stay Updated</h5>
                <p>Be the first to Know</p>
              </div>
            </div>

            <div className='ppCard'>
              <div className='ppCardLogo'><MdGroups /></div>
              <div className='ppCardDetails'>
                <h5>Share Stories</h5>
                <p>Your voice inspires</p>
              </div>
            </div>
            
            <div className='ppCard'>
              <div className='ppCardLogo'><GiStrong /></div>
              <div className='ppCardDetails'>
                <h5>Grow Together</h5>
                <p>Be stronger as one</p>
              </div>
            </div>
            
          </div>

          <div className='subscribeSec'>
            <div className='subInputSec'>
              <div>
                <span><FiMessageSquare /></span>
                <input type="email" placeholder='Enter your email address'/>
              </div>
              <button>Subscribe</button>
            </div>

            <p><div><BsLockFill /></div> We respect your Privacy. No spam, ever.</p>
          </div>
          <p>Follow us and be part of our journey</p>
          <div className='follUsLogo'>
            <div className='logoSec' >
              <a href="https://x.com/rayzmedia_?s=21"  target="_blank" rel="noopener noreferrer"><div className='log1'><PiXLogo /></div></a>
              <a href="https://www.youtube.com/"  target="_blank" rel="noopener noreferrer"><div className='log3'><ImYoutube /></div></a>
              <a href="https://www.facebook.com/share/17Wy7ta5eU/?mibextid=wwXIfr"  target="_blank" rel="noopener noreferrer"><div className='log4'><FaFacebookF /></div></a>
              <a href="https://www.tiktok.com/@rayzmedia.com?_r=1&_t=ZS-95UE7wuPuOg"  target="_blank" rel="noopener noreferrer"><div className='log2'><BiLogoTiktok /></div></a>
              <a href="https://www.pinterest.com/"  target="_blank" rel="noopener noreferrer"><div className='log5'><TfiPinterest /></div></a>
              <a href="https://www.instagram.com/rayzmedia?igsh=ODdkNXR1czV2dWox"  target="_blank" rel="noopener noreferrer"><div className='log6'><FaInstagram /></div></a>
              <a href="https://www.linkedin.com/company/rayzmedia/?viewAsMember=true"  target="_blank" rel="noopener noreferrer"><div className='log4'><TfiLinkedin /></div></a>
              <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer"> <div className='log7'><BiLogoGmail /></div></a>       

            
            </div>
          </div>
        </div>
    
    

    </>
  )
}

export default FollowUs