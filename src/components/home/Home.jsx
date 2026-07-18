import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import BRBtn from '../brButton/BRBtn'
import { ImLeaf } from 'react-icons/im'
// import Testimonial from '../testimonial/Testimonial'
import FollowUs from '../FollowUs/FollowUs'
// import herobgVideo1 from '../../assets/shopbgVideo2.mp4'
import { GiCook, GiForkKnifeSpoon, GiPalmTree, GiPlantSeed } from 'react-icons/gi'
import { LuAward, LuFlaskConicalOff, LuMoveRight, LuTreePalm } from 'react-icons/lu'
import { LiaMountainSolid } from 'react-icons/lia'
import { PiPlantBold } from 'react-icons/pi'
import { FaDroplet } from 'react-icons/fa6'
import Testimonial from '../testimonial/Testimonial'
import heroSecBGVideo from '../../assets/HeroSecBgBottleVideo.mp4'
import { BsStars } from 'react-icons/bs'
import { IoShieldCheckmark, IoWater } from 'react-icons/io5'
import { FaAngleRight, FaCanadianMapleLeaf, FaHandHoldingHeart, FaHandHoldingMedical, FaHeart, FaLongArrowAltRight } from 'react-icons/fa'
import HeroSectionAnimation from '../heroSectionAnimation/HeroSectionAnimation'
// import herobgVideo2 from '../../assets/olive_render.mp4'
import article5secVideo from '../../assets/homepagearticle5video.mp4'
import { BiShoppingBag } from 'react-icons/bi'
import { CiMoneyCheck1 } from 'react-icons/ci'
import { MdOutlineStoreMallDirectory } from 'react-icons/md'
import { GrDeliver } from 'react-icons/gr'
import newArticleImg1 from '../../assets/HomepageNewArticleImg1.png'
import newArticleImg2 from '../../assets/HomepageNewArticleImg2.png'
import newArticleImg3 from '../../assets/HomepageNewArticleImg3.png'
function Home() {

    const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const container = scrollRef.current;

      if (!section || !container) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate while the section is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);

        const maxScroll =
          container.scrollWidth - container.clientWidth;

        container.scrollLeft = progress * maxScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const newArticleSectionImg = [newArticleImg1,newArticleImg2, newArticleImg3]
    const [newArticleImg,setNewArticleImg] = useState(0)
  return (
    <div className='home'>

        {/* heroSection */}
        <div className='heroSec'>


            {/* <div className='herobgvideo'>
                
                <video src={heroSecBGVideo} autoPlay muted loop playsInline></video>
            </div> */}
            <div className='hero1srColumn'>
                <div>ARTICALES</div>
                <div>RECIPE</div>
            </div>
            <div className='heroleft'>
                <p className='startingPtag'><span><BsStars /></span>Premium Collection & Premium Quality</p>
                <h1 className='startingH1tag'><span>Premium Organic Cold Pressed</span></h1>
                <h2 className='startingH1tag'>Olive Oil For Every Kitchen</h2>
                
                <p className='ptagAfterH1tag'>Inspired by the rich agricultural heritage of Balochistan, our organic cold-pressed olive oil is produced using carefully selected olives and traditional extraction methods. The result is a pure, flavorful, and nutrient-rich oil that brings natural goodness and premium quality to every meal.</p>
                <div className='divBtn'>
                    <div> <BRBtn /> </div>
                    <div>Journey <span><FaAngleRight /></span></div>
                    
                </div>
                <div className='heroleftBottom'>
                    <div><span><FaCanadianMapleLeaf /></span> 100% organic</div>
                    <div><span><IoWater /></span> cold Pressed</div>
                    <div><span><LuFlaskConicalOff /></span> no addactive</div>
                </div>
            </div>
            
            <div className='herorightSection'></div>
            
        </div>

        <HeroSectionAnimation/>

        {/* articlesection */}
        <div className='Homearticles'>

            <div>
                <h1>Your Ultimate Content </h1>
                <h1>Control Panel</h1>
            </div>

            <div className='articleSection'>
                
                <div className='homePagearticleItem'>
                    <h3>01 <span>TERRITORY CONTROL</span></h3>
                    <h2>1Territory Control</h2>
                    <p>Stream by market, by window. Privately (B2B) or publish to the world.</p>
                    <div></div>
                </div>

                <div className='homePagearticleItem'>
                    <h3>02 <span>TERRITORY CONTROL</span></h3>
                    <h5>TERRITORY CONTROL</h5>
                    <h2>2Territory Control</h2>
                    <p>Stream by market, by window. Privately (B2B) or publish to the world.</p>
                    
                </div>

                <div className='homePagearticleItem'>
                    <h3>03 <span>TERRITORY CONTROL</span></h3>
                    <div className='divSection'>
                        <span><BiShoppingBag /></span>
                        <div>
                            <h2>B2B Private MarketPlace</h2>
                            <p>Exclusive access for your bussiness partners and distributores</p>
                        </div>
                    </div>
                    
                </div>

                <div className='homePagearticleItem'>
                    <h2>4Territory Control</h2>
                    <p>Stream by market, by window. Privately (B2B) or publish to the world.</p>
                    <div >

                        
                        <h4><span><CiMoneyCheck1 /></span>Budget-Friendly</h4>
                        <h4><span><MdOutlineStoreMallDirectory /></span>Easily Available </h4>
                        <h4><span><GrDeliver /></span>Fast Delivery</h4>
                        
                    </div>
                </div>

                <div className='homePagearticleItem'>
                    <h3>05 <span>TERRITORY CONTROL</span></h3>
                    <h2>5Territory Control</h2>
                    <p>Stream by market, by window. Privately (B2B) or publish to the world.</p>
                    <div>
                        <video src={heroSecBGVideo} autoPlay muted loop></video>
                    </div>
                </div>

                <div className='homePagearticleItem'>
                    <h3>06 <span>TERRITORY CONTROL</span></h3>
                    <h2>6Territory Control</h2>
                    <p>Stream by market, by window. Privately (B2B) or publish to the world.</p>
                    <div></div>
                </div>

            </div>

        </div>
        {/* new articles */}
        <div className='aboutArticles'>
            <h1>Knowledge You Can </h1>
            <h1>Trust From BoriRoots</h1>
            <div className='aboutArticleSection'>
                <div className='aboutArticleSectionImg' key={newArticleImg} style={{backgroundImage:`url(${newArticleSectionImg[newArticleImg]})`}}></div>
                <div className='aboutArticleSectionDetails'>
                    <div className={`aboutArticleSectionDetailsItems ${newArticleImg == 0? "active" : ""}`} onMouseEnter={()=>setNewArticleImg(0)}>
                        <h5>01</h5>
                        <h3>Well Researched</h3>
                        <p>Every article is backed by careful research to ensure you receive trustworthy and valuable information.</p>
                    </div>
                    <div className={`aboutArticleSectionDetailsItems ${newArticleImg == 1? "active" : ""}`} onMouseEnter={()=>setNewArticleImg(1)}>
                        <h5>02</h5>
                        <h3>Easy to Understand</h3>
                        <p>Complex topics are explained in simple language, making healthy living accessible to everyone.</p>
                    </div>
                    <div className={`aboutArticleSectionDetailsItems ${newArticleImg == 2? "active" : ""}`}  onMouseEnter={()=>setNewArticleImg(2)}>
                        <h5>03</h5>
                        <h3>Updated Regularly</h3>
                        <p>We continuously add new articles with the latest recipes, health tips, and olive oil knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
                {/* recipesection */}
        <div className='recipiSection' ref={sectionRef}>
            <div className='recipeUpperSection'>
                <div className='recipeUpperSectionLeftSide'>
                    <h2>Made For</h2>
                    <h2>real moments</h2>
                    <p>Discover delicious and healthy recipes made with BoriRoots olive oil</p>
                    <div><span><GiForkKnifeSpoon /></span>Explore</div>
                </div>

                <div className='recipeUppersectionRightSide'></div>

            </div>

            <div className='recipeDownSection'>

                <div className='recipeItemSection' ref={scrollRef}>
                    <div className='recipeItem'>
                        <h3>Spicy Chicken Karahi</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Lebanese Tabbouleh</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Korean Bibimbap</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Malaysian Beef Rendang</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Jamaican Jerk Chicken</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Doro Wat with Injera</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Oaxacan Mole Negro</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Beef Bourguignon</h3>
                    </div>
                    <div className='recipeItem'>
                        <h3>Japanese Katsu Curry</h3>
                    </div>
                </div>
            </div>
            <div className='viewallbtn'>View all recipes <span><FaLongArrowAltRight /></span></div>

        </div>


        {/* collection */}
        <div className='Collection'>
            <p className='startingPtag'>Curated Selection</p>
            <h1 className='startingH1tag'>Our Premium Collection</h1>
            <p className='ptagAfterH1tag'>Discover our range of artisanal olive oils, each bottle capturing the essence of Balochistan's landscapes.</p>

            <div className='colProduct'>

                <div className='colProd1'>
                    <div className='cp1img'></div>
                    <h3>Heritage Reserve</h3>
                    <p>Limited edition oil from century-old olive trees, with complex flavors and aromas.</p>
                    <div className='cp1footer'>
                        
                        <span><ImLeaf /></span>
                        <div> <BRBtn /> </div>
                    </div>
                </div>

                <div className='colProd2'>
                    <p>our promise</p>
                    <h2>From the ancient groves of Bori, purity in every drop."</h2>
                    <div className='cp2Footer'>
                        <div>
                            <span><ImLeaf /></span>
                            <p>heritage</p>
                        </div>

                        <div>
                            <span><ImLeaf /></span>
                            <p>heritage</p>
                        </div>

                        <div>
                            <span><ImLeaf /></span>
                            <p>heritage</p>
                        </div>
                    </div>
                </div>

                <div className='colProd3'>
                    <h3>tasting profile</h3>
                    <div className='cp3Footer'>

                        <div className='items'>
                            <p>fruitiness</p>

                            <div>
                                <span className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span></span>
                            </div>
                        </div>

                        <div className='items'>
                            <p>fruitiness</p>

                            <div>
                                <span className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span></span>
                            </div>
                        </div>

                        <div className='items'>
                            <p>fruitiness</p>

                            <div>
                                <span className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span  className='filled'></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* landscpes */}
        <div className='landscap'>
            <p className='startingPtag'>Our Heritage</p>
            <h1 className='startingH1tag'>The Landscapes of Balochistan</h1>
            <p className='ptagAfterH1tag'>Our olive groves are nestled in the breathtaking landscapes of Balochistan, where nature and tradition come together.</p>

            <div className='landscapImgSec'>

                <div className='landscapSec'>
                    <div className='landscapImg'></div>
                    <div className='iconDiv'><span><LuTreePalm /></span></div>
                    <h4>Ancient Oilve Groves</h4>
                    <p>Our groves are nurtured withcare, preserving generations of heritage.</p>
                </div>
                <div className='landscapSec'>
                    <div className='landscapImg'></div>
                    <div className='iconDiv'><span><LiaMountainSolid /></span></div>
                    <h4>Breathtaking Landscapes</h4>
                    <p>From rugged mountains to fertile valleys, nature thrives in its purest form.</p>
                </div>
                <div className='landscapSec'>
                    <div className='landscapImg'></div>
                    <div className='iconDiv'><span><PiPlantBold /></span></div>
                    <h4>Sustainable & Natural</h4>
                    <p>We follow natural, sustainable pratices to protect the land and future generations.</p>
                </div>
                <div className='landscapSec'>
                    <div className='landscapImg'></div>
                    <div className='iconDiv'><span><GiPlantSeed /></span></div>
                    <h4>Purity in Every Oilve</h4>
                    <p>Every olive is a testament to purity, quality and the richness of our land.</p>
                </div>

            </div>
            <div className='landscapBtn'><BRBtn /></div>
        </div>

        {/* testimonail */}
        
        <FollowUs />
        {/* <Testimonial />  */}
        <Testimonial /> 

        {/* begin your journey */}
        <div className='beginYJ'>
            <p className='startingPtag'>Begin Your Journey</p>
            <h1 className='startingH1tag'>Experience the Authentic Taste of Balochistan</h1>
            <p className='ptagAfterH1tag'>Bring home the tradition, flavor, and health benefits of our premium olive oil today.</p>
            <div className='byjBtn'><BRBtn /></div>
        </div>
    </div>
  )
}

export default Home