import React from 'react'
import './home.css'
import BRBtn from '../brButton/BRBtn'
import { ImLeaf } from 'react-icons/im'
import Testimonial from '../testimonial/Testimonial'
function Home() {
  return (
    <div className='home'>
        {/* heroSection */}
        <div className='heroSec'>

            <div className='heroleft'>
                <p className='startingPtag'>Premium Collection</p>
                <h1 className='startingH1tag'>Organic Cold Pressed</h1>
                <p className='ptagAfterH1tag'>From the verdant landscapes of Balochistan, we bring you nature's liquid gold. Pure, authentic, and rich in tradition.</p>
                <div className='divBtn'>
                    <div> <BRBtn /> </div>
                    <div> <BRBtn /> </div>
                    
                </div>
            </div>

            <div className='heroRight'>
                <div></div>
            </div>
        </div>

        {/* shortStory */}
        <div className='shortStory'>
            <p className='startingPtag'>Excellence in Every Drop</p>
            <h1 className='startingH1tag'>Nature's Finest Offering</h1>
            <p className='ptagAfterH1tag'>Our olive oil embodies the essence of Balochistan's rich soil and traditional harvesting methods.</p>

            <div className='sscardSec'>
                {/* card1 */}
                <div className='cards'>
                    <div><ImLeaf /></div>
                    <h3>Premium Quality</h3>
                    <p>Cold-pressed and unfiltered to preserve all natural nutrients and flavors.</p>

                </div>
                <div className='cards'>
                    <div><ImLeaf /></div>
                    <h3>Premium Quality</h3>
                    <p>Cold-pressed and unfiltered to preserve all natural nutrients and flavors.</p>

                </div>
                <div className='cards'>
                    <div><ImLeaf /></div>
                    <h3>Premium Quality</h3>
                    <p>Cold-pressed and unfiltered to preserve all natural nutrients and flavors.</p>

                </div>
            </div>
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
                <div className='landscapImg'></div>
                <div className='landscapImg'></div>
                <div className='landscapImg'></div>
                <div className='landscapImg'></div>
            </div>
            <div className='landscapBtn'><BRBtn /></div>
        </div>

        {/* testimonail */}
        

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