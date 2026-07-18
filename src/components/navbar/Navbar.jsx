import React, { useEffect, useState } from 'react'
import './navbar.css'
import { RiMenuLine,  RiMenuUnfold4Line } from 'react-icons/ri';
import { TbMenu3 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { LuHouse } from 'react-icons/lu';
import { MdOutlinePersonOutline, MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineMenu, HiOutlineMenuAlt3 } from 'react-icons/hi';
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

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`nav ${showNavbar ? "show" : "hide"} ${scrolled? "glassicnavbar" : ""}`} >
        
        <div className='navName'  onClick={()=>{setDropMenu(false); setClickMenu(false)}}><Link to="/">BORI ROOTS</Link></div>


        <div className='navbarLeftSide'>
            <Link to="/" onClick={()=>{setDropMenu(false); setClickMenu(false)}}> <span><LuHouse/></span></Link>
            <Link to="/shop" onClick={()=>{setDropMenu(false); setClickMenu(false)}}> <span><MdOutlineShoppingCart /></span></Link>
            <Link to="/contact" onClick={()=>{setDropMenu(false); setClickMenu(false)}}> <span><MdOutlinePersonOutline /></span></Link>
            
        <div className='navMenu' onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>{(!clickMenu)?<HiOutlineMenu /> :<HiOutlineMenuAlt3 /> } </div>
        </div>
        
        
    
        <ul className={`navLi ${(dropMenu)? " navLiM" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>
            
            <li><Link to="/discover">ARTICALES</Link></li>
            <li><Link to="/recipe">RECIPE</Link></li>
            
            
        </ul>
    </div>



    </>
  )
}

export default Navbar