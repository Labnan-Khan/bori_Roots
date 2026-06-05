import React from 'react'
import './testimonial.css'
import { GoStar } from 'react-icons/go'
import { FaStar } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
import tMImg1 from './testimonailImg1.jpeg'
import tMImg2 from './testimonailImg2.jpeg'
import tMImg3 from './testimonailImg3.jpeg'
import tMImg4 from './testimonailImg4.jpeg'
import tMImg5 from './testimonailImg5.jpeg'
import tMImg6 from './testimonailImg6.jpeg'
import tMImg7 from './testimonailImg7.jpeg'
import tMImg8 from './testimonailImg8.jpeg'
import tMImg9 from './testimonailImg9.jpeg'
import tMImg10 from './testimonailImg10.jpeg'
import tMImg11 from './testimonailImg11.jpeg'
import tMImg12 from './testimonailImg12.jpeg'
import tMImg13 from './testimonailImg13.jpeg'
import tMImg14 from './testimonailImg14.jpeg'
import tMImg15 from './testimonailImg15.jpeg'



// import testiVideo from '../testimonailBgVideo.mp4'

function Testimonial() {
        const comment = [
            {user:"Kenny Jo", tMbgImg:tMImg1 , com:"Premium quality, every single time."}, {user:"Amaya Bailey" , tMbgImg:tMImg2 , com:"Saved us time and scaled our output."},{user:"John Haack", tMbgImg:tMImg3 , com:"Not just editors — they understand content."}, {user:"Stevie Richards", tMbgImg:tMImg4 , com:"Our content finally started performing"},
            {user:"Robyn", tMbgImg:tMImg5 , com:"Views doubled within weeks"},{user:"Charlie", tMbgImg:tMImg6 , com:"Finally content that actually converts"}, {user:"Shelby ", tMbgImg:tMImg7 , com:"Hook → retention → growth. They get it."},
            {user:"Ruby Hayes", tMbgImg:tMImg8 , com:"Best decision for our brand content."},{user:"Sangrez", tMbgImg:tMImg9 , com:"High-quality storytelling that stands out."}, {user:"Jon Youshaie", tMbgImg:tMImg10 , com:"Fast delivery with premium quality results."},
            {user:"Thomas Ross", tMbgImg:tMImg11, com:"Great attention to detail in every project."},{user:"Anthony Parker", tMbgImg:tMImg12, com:"High retention edits that actually work."}, {user:"Jordan Bryant", tMbgImg:tMImg13, com:"Very reliable and consistent service."},
            {user:"Abram", tMbgImg:tMImg14, com:"Very smooth and modern editing style."},{user:"Michael Smith", tMbgImg:tMImg15, com:"Exactly the style we were looking for."}]




  return (
    

    <>
        <div className='testimonial'>
            <div className='testiUSec'>
                <h4 className='testiUSecH4'> Edits Pay Off </h4>
                <p className='testiUSecP1'>Trusted by Creators. Backed by Results.</p>
                <div className='testiBoxSec'>

                    <div className='testiTrack'>
                        {comment.map((comt,i)=>(
                    <div className='tBox' key={i}>
                        <div className='tboxUpside'>
                            
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                        </div>
                        <div className='tBoxMP'>
                            <div style={{ backgroundImage: `url(${comt.tMbgImg})` }}></div>
                            <span>
                                {comt.com}
                            </span>
                        </div>
                        <div className='tboxDownSide'>
                            <div><IoMdCheckmark /></div>
                            <p>{comt.user}</p>
                        </div>
                    </div>
                  ))}

                    {comment.map((comt,i)=>(
                    <div className='tBox' key={i}>
                        <div className='tboxUpside'>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                            <div><FaStar /></div>
                        </div>
                        <p className='tBoxMP'>

                            <div style={{ backgroundImage: `url(${comt.tMbgImg})` }}></div>
                            <span>
                                {comt.com}
                            </span>
                        </p>
                        <div className='tboxDownSide'>
                            <div><IoMdCheckmark /></div>
                            <p>{comt.user}</p>
                        </div>
                    </div>
                  ))}


                    </div>

                 
                    
                </div>
                
            </div>
             <div className='VideoSec'>
                    {/* <video src={testiVideo} autoPlay muted loop  muted playsInline preload="metadata" ></video> */}
            </div>
        </div>
    </>
  )
}

export default Testimonial