import React from 'react'
import './testimonial.css'
import { GoStar } from 'react-icons/go'
import { FaStar } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
// import testiVideo from '../testimonailBgVideo.mp4'

function Testimonial() {
        const comment = [{user:"Kenny Jo", com:"Premium quality, every single time."}, {user:"Amaya Bailey", com:"Saved us time and scaled our output."},{user:"John Haack", com:"Not just editors — they understand content."}, {user:"Stevie Richards", com:"Our content finally started performing"},
            {user:"Robyn", com:"Views doubled within weeks"},{user:"Charlie", com:"Finally content that actually converts"}, {user:"Shelby ", com:"Hook → retention → growth. They get it."},
            {user:"Ruby Hayes", com:"Best decision for our brand content."},{user:"Sangrez", com:"High-quality storytelling that stands out."}, {user:"Jon Youshaie", com:"Fast delivery with premium quality results."},
            {user:"Thomas Ross", com:"Great attention to detail in every project."},{user:"Anthony Parker", com:"High retention edits that actually work."}, {user:"Jordan Bryant", com:"Very reliable and consistent service."},
            {user:"Abram", com:"Very smooth and modern editing style."},{user:"Michael Smith", com:"Exactly the style we were looking for."}]




  return (
    

    <>
        <div className='testimonial'>
            <div className='testiUSec'>
                <p className='startingPtag'>Trusted by Many</p>
                <h4 className='startingH1tag'>What Our Customers Say</h4>
                <p className='ptagAfterH1tag'>Discover why people love our traditional Balochi olive oil.</p>
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
                        <p className='tBoxMP'>
                            {comt.com}
                        </p>
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
                            {comt.com}
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
             {/* <div className='VideoSec'>
                    <video src={testiVideo} autoPlay muted loop  muted playsInline preload="metadata" ></video>
                </div> */}
        </div>
    </>
  )
}

export default Testimonial