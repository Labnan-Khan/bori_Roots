import React, { useEffect, useState } from 'react'
import './navbar.css'
import { RiMenuLine,  RiMenuUnfold4Line } from 'react-icons/ri';
import { TbMenu3 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [clickMenu, setClickMenu] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)
    

    useEffect(()=>{
        const handleScroll = () =>{
            const curentScroll = window.pageYOffset;

            if (curentScroll <= 0){
                setShowNavbar(true);
                //  lastScroll.current = 0;
                 setLastScroll(0);
                return
            }

            if(curentScroll > lastScroll && curentScroll >50){
                setShowNavbar(false)
            }else {
                setShowNavbar(true)
            }

            setLastScroll(curentScroll)
        }
         window.addEventListener("scroll", handleScroll);
         
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[lastScroll]);


    useEffect(()=>{
        if(dropMenu && window.innerWidth <=768){

            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }

        return ()=>{
            document.body.style.overflow = "auto";
        }
    },[dropMenu])

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
            setDropMenu(false);          // close dropdown when on desktop
            // document.body.style.overflow = "auto"; // restore scroll
        }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
    <div className={`nav ${showNavbar ? "show" : "hide"}`} >
        <div className='navName'><Link to="/">BORI ROOTS</Link></div>
        <div className='navMenu' onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>{(!clickMenu)?<RiMenuLine /> :<TbMenu3 /> } </div>
        
    
        <ul className={`navLi ${(dropMenu)? " navLiM" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/discover">ARTICALES</Link></li>
            <li><Link to="/recipe">RECIPE</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            {/* <li><Link to="/about" >About Us</Link></li> */}
            <li><Link to="/card">CARD</Link></li>
            
        </ul>
    </div>



    </>
  )
}

export default Navbar