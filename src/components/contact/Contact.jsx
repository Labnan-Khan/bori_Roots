import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import { PiHandWavingDuotone } from 'react-icons/pi'
import { FaHandPointLeft, FaHandshake } from 'react-icons/fa'
// import emailjs from '@emailjs/browser';
import { IoMdCheckmark } from 'react-icons/io'
import FollowUs from '../FollowUs/FollowUs'

function Contact() {

    const[submitBtn, setSubmitBtn] = useState(false)
    const [errors, setErrors] = useState({  userName: false,  companyName: false,  userEmail: false,  firstDropDown: false,});
    const hasError = Object.values(errors).some(Boolean);

    const[userName, setUserName] = useState("")
    const[companyName, setCompanyName] = useState("")
    const[userEmail, setUserEmail] = useState("")
    const[firstDropDown, setFirstDropDown] = useState("")


const form = useRef()



useEffect(() => {
    if (submitBtn === true) {
        const timer = setTimeout(() => {
            setSubmitBtn(false);
        }, 4000);

        return () => clearTimeout(timer);
    }
}, [submitBtn]);


const sendEmail = (e) => {
  e.preventDefault();

  const newErrors = {
  userName: userName.trim() === "",
  companyName: companyName.trim() === "",
  userEmail: userEmail.trim() === "",
  firstDropDown: firstDropDown === "",
};

setErrors(newErrors);

// stop if any error exists
if (Object.values(newErrors).some(err => err)) {
    const formTop = document.getElementById("scrollForm");
    const timer = setTimeout(() => {
        if(formTop){
            const top = formTop.getBoundingClientRect().top +window.scrollY;
            window.scrollTo({ top:top - 100, behavior: "smooth"})
        }
        
        }, 500);

    
    return;
}


    
  // your email logic here
   emailjs.sendForm("service_4rctlan", "template_jywq00z" , form.current, {
        publicKey: "iAcTdkXScDxMzppgd",
    }).then(()=>{
        form.current.reset()
        setUserName("");
        setCompanyName("");
        setUserEmail("");
        setFirstDropDown("");
        setSubmitBtn(true)
}).catch((error)=>{
        console.log("failed")
    })
};


  return (
    <>
    <div className='ContactUs'>

        <div className='contactHome'>
            <div className='contactHomeleft'>
                <h2>We’re Here to Help </h2>
                <p>
                    Have a question, need support, or facing
                     any issue with a download or subscription?
                </p>
                <p>
                    Don’t worry – our team is always 
                    available to help
                     you and make sure everything works smoothly.
                </p>
                {/* <div className='leftimg'></div> */}
                <div className='leftBottom'>
                    {/* <div className='firestRow'>
                        <p>Book a 1:1</p>
                        <p>consultaion to:</p>
                        <div></div>
                    </div> */}
                    <div className='secondRow'>
                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>See how we'll solve your editing needs</p>
                        </div>

                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>Get a personalized plan recommendation</p>
                        </div>

                        <div>
                            <span><IoMdCheckmark /></span>
                            <p>View samples from businesses like yours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactHomeRight' id="scrollForm" >

                <form className='formSec'  ref={form} onSubmit={sendEmail} >
                <input type="text" className={errors.userName? "errorInput" :""} name="user_name"  placeholder='Name' value={userName} onChange={(e)=>{ setUserName(e.target.value); setErrors(prev => ({ ...prev, userName: false }));}}/>
                <input type="text" className={errors.companyName? "errorInput" :""} name="company_name" placeholder='Company Name' value={companyName} onChange={(e)=>{ setCompanyName(e.target.value); setErrors(prev => ({ ...prev, companyName: false }));}}/>
                <input type="email" className={errors.userEmail? "errorInput" :""} name="user_email" placeholder='Email' value={userEmail} onChange={(e)=>{ setUserEmail(e.target.value); setErrors(prev => ({ ...prev, userEmail: false }));}}/>
                
                
                <textarea type="text" name='message' placeholder='Message' cols="7"></textarea >
                <div className='SubmitBtnDiv'>
                    <button type='submit'  className={`${submitBtn? "MessageSubmite": ""}`}>

                        {(submitBtn)? <span><IoMdCheckmark /></span>  : ""}
                        {(submitBtn)?  "Sent successfully" : "Send Message"}
                        </button>                    
                {/* <div className={`messageDiv ${submitBtn? "messageSubmit": ""}`}>Thank you for your message. It has been sent.</div> */}
                </div>
                {/* <button type='submit' onClick={()=>setSubmitBtn(true)}>Send Message</button> */}
                </form>
                <div className={`hideErrorMeg ${(hasError)? "showErrorMeg": ""}`}>Please fill the Required inputs</div>
                
            </div>
        </div>

        <div className='waysToReachUs'>
            <h4>Other Ways to Reach Us</h4>
            <p>If you prefer email, you can contact us directly:</p>

            <div className='waysToReachUsBoxes'>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Technical Support</h5>
                        <p>
                            <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer">
                                support@ryzmedia.com
                            </a>
                        </p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Information</h5>
                        <p>
                            <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer">
                                info@rayzmedia.com
                            </a>
                        </p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>General Contact</h5>
                        <p>
                            <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer">
                                contact@rayzmedia.com
                            </a>
                        </p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>
                
                <div className='BoxSection'>
                    <div className='BoxSectionLeft'>
                        <h5>Collaboration</h5>
                        <p>
                            <a href="mailto:Admin@rayzmedia.com?subject=Editing%20Services%20Request&body=Hi,%0A%0AI’d%20like%20to%20get%20started%20with%20your%20editing%20services.%20Please%20let%20me%20know%20the%20next%20steps.%0A%0AProject%20details:%0A%0AName:%0ACompany:%0AType%20of%20Content:%0ANumber%20of%20videos:%0ATurnaround%20Time:%0A%0AThanks,"  target="_blank" rel="noopener noreferrer">
                                collab@rayzmedia.com
                            </a>
                        </p>
                    </div>
                    <div className='BoxSectionRight'><FaHandPointLeft /></div>
                </div>

            </div>
        </div>

        <FollowUs />

    </div>


    </>
  )
}

export default Contact