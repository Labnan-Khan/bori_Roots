import React from 'react'
import './heroSectionAnimation.css'
import { FaRegHeart, FaShieldAlt } from 'react-icons/fa'
import { LuCookingPot } from 'react-icons/lu'
import { RiSeedlingLine } from 'react-icons/ri'
import { GiMountaintop } from 'react-icons/gi'
import { BsBookmarkPlus } from 'react-icons/bs'
function HeroSectionAnimation() {
    const heroanimationlist = [
        {icon:FaRegHeart, heading:"Wellness", para:"Rich in healthy fats that support a balanced lifestyle."},
        {icon:LuCookingPot, heading:"Versatility", para:"Perfect for cooking, roasting, dipping, and salads."},
        {icon:FaShieldAlt, heading:"Trust", para:"Every bottle reflects our commitment to quality and purity."},
        {icon:RiSeedlingLine, heading:"Farm Fresh", para:"Harvested directly from carefully selected olive groves."},
        {icon:BsBookmarkPlus , heading:"Nutrient Rich", para:"Naturally contains vitamins and healthy monounsaturated fats."},
        {icon:GiMountaintop , heading:"Origin", para:"Sourced from carefully selected olive groves."},
    ]
  return (
    <div className='herosectionAnimation'>
        <div className='homepageheroFooter'>
            <div className='heroSectionFooter'>

                {[...heroanimationlist,...heroanimationlist].map((item,index)=>{
                    const Icon = item.icon
                   return( 
                        <div>
                            <span><Icon /></span>
                            <h3>{item.heading}</h3>
                            <p>{item.para}</p>
                        </div>
                    
                   )
                })}

            </div>
        </div>
    </div>
  )
}

export default HeroSectionAnimation
