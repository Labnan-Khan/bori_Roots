import React, { useState } from 'react'
import './brJournal.css'
import brimg1 from '../../assets/landscapImg1.png'
import brimg2 from '../../assets/landscapImg2.png'
import { TiArrowLeftThick } from 'react-icons/ti'
function BRJournal() {
    const itemDetails = [ 
                        {
                        cardImg: brimg1, cardHeading: "Balochistan Olive Oil Wins Silver at New York International Olive Oil Competition",
                            cardDate: "March 15, 2025", cardSource: "Source: Khaleej Times, Tribune.com.pk",
                            cardPeraghaph: "In a historic achievement for Pakistan's agricultural sector, Balochistan's premium olive oil from Loralai district secured a Silver Award at the New York International Olive Oil Competition (NYIOOC) 2025, the world's most prestigious olive oil quality contest. The award-winning oil, crafted from the Arbequina variety, highlights the exceptional quality and international standards achieved by Balochistan's olive ...",
                            cardLink: "Read Full Article"},

                        {cardImg: brimg2, cardHeading: "Comparative Study of Olive Varieties in Balochistan: Kalamata, Leccino, and Arbiquina Lead in Oil Production",
                            cardDate: "February 20, 2025", cardSource: "Source: International Network for Natural Sciences",
                            cardPeraghaph: "Research conducted in Quetta, Balochistan evaluated five exotic olive cultivars under local climatic conditions. The study found that Kalamata cultivar exhibited the highest oil production at 21%, followed by Leccino at 20% and Arbiquina at 17%. These findings demonstrate the suitability of these varieties for oil extraction in Balochistan's unique climate, contributing to the region's growing reputation as a premium ...",
                            cardLink: ""},

                        {cardImg: brimg1, cardHeading: "The Evolution of Balochistan's Olive Industry: From Experimental Cultivation to 8,000 Acres of Commercial Production",
                            cardDate: "January 10, 2025", cardSource: "Source: Lok Sujag",
                            cardPeraghaph: "Over the past two decades, Balochistan's olive industry has transformed from experimental initiatives to a thriving commercial sector. Through collaborative efforts between the Balochistan Agriculture Department, Federal Ministry of National Food Security and Research, and CIHEAM-Bari, the region now spans 8,000 acres producing 2,500 tonnes of olives valued at over Rs2.16 billion. The industry's growth demonstrates the region's potential for sustainable agricultural ...",
                            cardLink: ""},

                        {cardImg: brimg2, cardHeading: "Environmental Benefits of Olive Cultivation in Balochistan: Carbon Sequestration and Forest Conservation",
                            cardDate: "December 5, 2024", cardSource: "Source: Olive Oil Times, Readers Insight",
                            cardPeraghaph: "Beyond economic benefits, olive farming in Balochistan plays a crucial role in environmental conservation. Research indicates that olive orchards in the region have the potential to sequester organic carbon, improving soil quality and contributing to climate change mitigation. Additionally, grafting Spanish and Italian olive varieties onto wild olive trees provides economic alternatives to logging, helping preserve the province's ...",
                            cardLink: ""},

                        {cardImg: brimg1, cardHeading: "Loralai District Achieves 28% Oil Extraction Rate: Meeting Global Standards in Balochistan",
                            cardDate: "November 18, 2024", cardSource: "Source: Lok Sujag",
                            cardPeraghaph: "Loralai district in Balochistan has achieved an impressive oil extraction rate of 28 kilograms per 100 kilograms of olives, aligning with global standards. Farmers report that with proper care, olive plants begin bearing fruit in the first year, producing high-quality oil sold at Rs3,000 to Rs3,500 per liter. This success story showcases the region's capacity for premium olive oil production and its growing significance in the international ...",
                            cardLink: ""},

                        {cardImg: brimg2, cardHeading: "Government Initiatives Drive Olive Farming Expansion: 2.46 Million Seedlings Distributed Across Balochistan",
                            cardDate: "October 12, 2024", cardSource: "Source: Lok Sujag",
                            cardPeraghaph: "The Balochistan government's continued support for olive cultivation includes the distribution of 2.46 million olive seedlings across the province and the Green Tractor Scheme providing 3,000 tractors at a 50% subsidy. These initiatives, combined with modern irrigation systems, cold storage facilities, and the introduction of 17 new olive varieties, have positioned Balochistan as a significant player in Pakistan's agricultural ...",
                            cardLink: ""}
                    ]
const [showFullArticalPage, setShowFullArticalPage] = useState(false)
const [fullarticalD , setFullarticalD] = useState({cardImg: "", cardHeading: "",
                            cardDate: "", cardSource: "",
                            cardPeraghaph: "",
                            cardLink: ""})


  return (
    <div className='brJournal'>
        <h1 className='startingH1tag'>Bori Roots Journal</h1>
        <p className='ptagAfterH1tag'>Stories, memories, and olive-growing wisdom from the heart of Balochistan.</p>

        <div className='brJournalCardSec'>

            {itemDetails.map((item,index) => {
                return (

                <div className='brJournalCardSecItem' key={index}>
                    <div className='cardSecItemImg' style={{ backgroundImage: `url(${item.cardImg})` }}></div>

                    <div className='cardSecItemDetails'>
                        {/* <p>{item.cardDate}</p> */}
                        <h3>{item.cardHeading}</h3>                        
                        {/* <p>{item.cardSource}</p> */}
                        {/* <p>{item.cardPeraghaph}</p> */}
                    </div>
                    <div className='fullDetailBtn'>
                        <div className='readFullArticalBtn' onClick={()=> {setShowFullArticalPage(true); setFullarticalD(item)}}>Read Full Article <span> →</span></div>
                    </div>
                </div>

                )
            })}    

       </div>


    {/* <div className='ShowFullDetail open'> */}
    <div className= {`ShowFullDetail ${showFullArticalPage? "showFullArticalPage" : ""}`} >
            <div className='gobackBtn' onClick={()=> setShowFullArticalPage(false)}><TiArrowLeftThick /></div>
            <div className='articalSec'>
                <h1 className='articalHeading startingH1tag'>{fullarticalD.cardHeading}</h1>
                <div  className='articalDetails'>
                    <div  className='articalImg' style={{ backgroundImage: `url(${fullarticalD.cardImg})` }}></div>
                    <div className='articalpSec'>
                        <p className='articalDate'>{fullarticalD.cardDate}</p>
                        <p className='articalSource'>{fullarticalD.cardSource}</p>
                        <p  className='articalParaghrap'>{fullarticalD.cardPeraghaph}</p>
                    </div>
                </div>
                
            </div>
    </div>

    </div>
  )
}

export default BRJournal