import React, { useEffect, useState } from 'react'
import './brJournal.css'
import brimg1 from '../../assets/landscapImg1.png'
import brimg2 from '../../assets/landscapImg2.png'
import { TiArrowLeftThick } from 'react-icons/ti'
import landscapImg1 from './landscapImg1.jpg'
function BRJournal() {


    // Journal item array
    const itemJournalDetails = [  
                        
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Consumption Linked to 28% Lower Risk of Cardiovascular Disease Mortality",
                            cardDate: "2022-01-18", cardSource: "JACC",
                            cardPeraghaph: "'A landmark Harvard study published in the Journal of the American College of Cardiology found that people who consumed more than half a tablespoon of olive oil per day had a 14% lower risk of cardiovascular disease. Replacing just 10 grams per day of margarine or butter with olive oil was associated with a 5% lower risk of total cardiovascular events.",
                            cardLink: "https://www.jacc.org/doi/10.1016/j.jacc.2021.10.041"},
                        {
                        cardImg: brimg1, cardHeading: "Oleocanthal in Extra Virgin Olive Oil Shows Alzheimer''s-Fighting Properties",
                            cardDate: "2013-11-01", cardSource: "NCBI",
                            cardPeraghaph: "'Researchers at the University of Louisiana Monroe demonstrated that oleocanthal, a phenolic compound unique to extra virgin olive oil, enhances the brain''s ability to clear the amyloid plaques associated with Alzheimer''s disease. The study showed that oleocanthal promotes autophagy — the brain''s natural waste-clearance process — offering a promising dietary route to cognitive protection.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4237214/"},
                        {
                        cardImg: brimg1, cardHeading: "PREDIMED Trial: Mediterranean Diet with Olive Oil Reduces Stroke Risk by 39%",
                            cardDate: "2013-04-04", cardSource: "NEJM",
                            cardPeraghaph: "The landmark PREDIMED randomized controlled trial, involving over 7,000 participants at high cardiovascular risk in Spain, found that a Mediterranean diet supplemented with extra virgin olive oil reduced the incidence of major cardiovascular events by 30%, and specifically lowered stroke risk by 39% compared to a low-fat control diet.",
                            cardLink: "https://www.nejm.org/doi/full/10.1056/NEJMoa1200303"},
                        {
                        cardImg: brimg1, cardHeading: "Polyphenol-Rich Olive Oil Improves Gut Microbiome Diversity, New Study Finds",
                            cardDate: "2024-03-15'", cardSource: "NCBI",
                            cardPeraghaph: "A 2024 clinical trial published in the journal Gut Microbes found that daily consumption of high-polyphenol extra virgin olive oil significantly increased the abundance of beneficial Lactobacillus and Bifidobacterium strains while reducing inflammatory bacterial markers. Participants consuming EVOO with over 400mg/kg polyphenols showed the most pronounced microbiome improvements after eight weeks.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10459315/"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Phenols Inhibit LDL Oxidation: Clinical Evidence Review",
                            cardDate: "2011-07-28", cardSource: "EFSA",
                            cardPeraghaph: "A systematic review of 32 randomized controlled trials concluded that hydroxytyrosol and oleuropein — phenolic compounds abundant in high-quality extra virgin olive oil — significantly inhibit the oxidation of LDL cholesterol, a primary driver of atherosclerosis. The European Food Safety Authority has authorized a health claim for olive oil polyphenols and protection of blood lipids.",
                            cardLink: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2011.2033"},
                        {
                        cardImg: brimg1, cardHeading: "New Study Maps the Complete Polyphenol Profile of 60 Global EVOO Varieties",
                            cardDate: "2021-10-06", cardSource: "NCBI",
                            cardPeraghaph: "Scientists from the University of Évora published a comprehensive metabolomic analysis of 60 extra virgin olive oil samples from 12 countries, mapping over 200 distinct phenolic compounds. The research found that Greek Koroneiki and Spanish Picual varieties consistently showed the highest total polyphenol concentrations, while also identifying novel biomarkers that could serve as geographic origin markers.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8535516/"},
                        {
                        cardImg: brimg1, cardHeading: "Daily Olive Oil Intake Associated with Lower Type 2 Diabetes Risk in European Cohort",
                            cardDate: "2010-12-01", cardSource: "Oxford Academic",
                            cardPeraghaph: "A prospective cohort study within the EPIC project, covering 15,000 participants across eight European countries, found that those with the highest olive oil consumption had a 16% lower risk of developing type 2 diabetes compared to those who consumed little or no olive oil. The association was strongest for extra virgin varieties and consumption exceeding 20ml per day.",
                            cardLink: "https://academic.oup.com/ajcn/article/92/6/1490/4597474"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil vs. Other Dietary Fats: A Head-to-Head Analysis of Inflammation Biomarkers",
                            cardDate: "2019-09-22", cardSource: "NCBI",
                            cardPeraghaph: "A double-blind crossover trial compared the effects of extra virgin olive oil, refined olive oil, and sunflower oil on 25 inflammatory biomarkers in 20 healthy adults. EVOO was the only fat that significantly reduced IL-6, TNF-α, and CRP levels, with effects attributable to its oleocanthal content mimicking the action of ibuprofen at 50 times lower doses.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6770785/"},
                        {
                        cardImg: brimg1, cardHeading: "Adulteration Detection: NMR Fingerprinting Can Identify Fake Olive Oil with 98% Accuracy",
                            cardDate: "2010-12-08", cardSource: "ACS",
                            cardPeraghaph: "Researchers at the University of Bologna developed a proton NMR spectroscopy method capable of detecting adulteration of extra virgin olive oil with cheaper vegetable oils at concentrations as low as 3%. The method, validated across 400 commercial samples, offers rapid screening without complex sample preparation and could be deployed at border inspection points and certification labs.",
                            cardLink: "https://pubs.acs.org/doi/abs/10.1021/jf102735n"},
                        {
                        cardImg: brimg1, cardHeading: "Extra Virgin Olive Oil Reduces Risk of Breast Cancer: Meta-Analysis of 19 Studies",
                            cardDate: "2015-09-21", cardSource: "NBCI",
                            cardPeraghaph: "A meta-analysis of 19 epidemiological studies covering over 850,000 women found that high olive oil consumption was associated with a 34% reduction in breast cancer risk. The protective effect was most pronounced for extra virgin olive oil, with researchers attributing it to oleocanthal''s ability to selectively induce apoptosis in cancer cells while sparing healthy cells.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4586575/"},
                        {
                        cardImg: brimg1, cardHeading: "American Heart Association Recommends Olive Oil as Primary Dietary Fat",
                            cardDate: "2024-12-10", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The American Heart Association''s updated 2024 dietary guidance explicitly recommends olive oil and other unsaturated plant-based fats as the preferred replacement for saturated fats. The guidance, endorsed by cardiologists, cites strong evidence linking regular olive oil consumption to reductions in LDL cholesterol, blood pressure, and overall cardiovascular mortality.",
                            cardLink: "https://www.oliveoiltimes.com/health-news/heart-association-new-guidance-recommends-olive-oil-unsaturate"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Consumption and Cognitive Decline: 28-Year Cohort Study",
                            cardDate: "2024-05-06", cardSource: "NCBI",
                            cardPeraghaph: "A 28-year prospective study from Harvard T.H. Chan School of Public Health tracked 92,000 adults and found that those consuming more than 7 grams of olive oil per day had a 28% lower risk of dying from dementia compared to those who rarely or never consumed olive oil. The association held after adjusting for overall diet quality, physical activity, and socioeconomic factors.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11151023/"},
                        {
                        cardImg: brimg1, cardHeading: "'Umbrella Review of 723 Studies Confirms Olive Oil Reduces Risk of 14 Chronic Diseases",
                            cardDate: "2024-08-21", cardSource: "NCBI",
                            cardPeraghaph: "A 2024 umbrella review published in MDPI Foods synthesized 723 articles and confirmed associations between olive oil consumption and reduced risk of 14 chronic diseases, including cardiovascular disease, stroke, type 2 diabetes, several cancers, metabolic syndrome, and neurodegenerative disorders. Researchers found the strongest evidence for cardiovascular outcomes, with consistent results across meta-analyses from observational and interventional studies.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11353474/"},
                        {
                        cardImg: brimg1, cardHeading: "EVOO Consumption Linked to Reduced Gastrointestinal Cancer Mortality: 18-Year Italian Cohort",
                            cardDate: "2024-10-28", cardSource: "NCBI",
                            cardPeraghaph: "The MICOL Study, a population-based prospective cohort tracked in Apulia, southern Italy from 2005 to 2023, found that high extra virgin olive oil intake was associated with significantly reduced risk of mortality from gastrointestinal cancers including colorectal, stomach, and pancreatic cancer, after adjusting for age, smoking, BMI, and physical activity.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11545239/"},
                        {
                        cardImg: brimg1, cardHeading: "Systematic Review: Olive Oil Consumption and Cognitive Performance in Adults Over 55",
                            cardDate: "2023-10-11", cardSource: "NCBI",
                            cardPeraghaph: "A 2023 systematic review in Frontiers in Nutrition examined RCTs, cohort studies, and cross-sectional data from Web of Science, Scopus, and PubMed through August 2023. While findings were inconsistent across studies, higher olive oil consumption was generally associated with better performance on memory, executive function, and processing speed tests in adults over 55.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10598670/"},
                        {
                        cardImg: brimg1, cardHeading: "50-Year Bibliometric Analysis: Olive Oil and Cardiovascular Disease Research Trends",
                            cardDate: "2023-11-29", cardSource: "NCBI",
                            cardPeraghaph: "A November 2023 bibliometric analysis covering 429 publications from the Scopus database over 50 years mapped the global research landscape on olive oil and cardiovascular disease. The study found a consistent 5.55% annual growth rate in publication output, with 2,530 authors and 47 countries contributing. Researchers identified oleic acid, polyphenols, and the Mediterranean diet as the dominant research clusters.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10916624/"},
                        {
                        cardImg: brimg1, cardHeading: "Hydroxytyrosol and Oleuropein Inhibit Skin Aging Enzymes, Study Finds",
                            cardDate: "2025-05-15", cardSource: "Preprints",
                            cardPeraghaph: "Research published in 2025 demonstrated that hydroxytyrosol and oleuropein — polyphenols abundant in olive leaves and olive mill wastewater — exhibit significant inhibitory effects on elastase and collagenase, the enzymes responsible for collagen degradation and skin aging. The study highlights potential cosmetic applications for olive oil by-products in anti-aging formulations.",
                            cardLink: "https://www.preprints.org/manuscript/202505.0906"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil By-Products Show Photoprotection and Antioxidant Properties in Skin Creams",
                            cardDate: "2021-04-16", cardSource: "NCBI",
                            cardPeraghaph: "A study in MDPI Pharmaceutics tested oil-in-water creams containing extracts from three olive oil industry by-products on human volunteers. The cream with the highest phenolic compound concentration showed the strongest antioxidant efficacy in vivo, with no adverse skin reactions. Researchers concluded that olive mill by-products can be successfully repurposed for cosmetic skin protection.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8065837/"},
                        {
                        cardImg: brimg1, cardHeading: "NAOOA''s Largest-Ever US Olive Oil Testing Program Finds Zero Adulteration in Major Brands",
                            cardDate: "2025-09-04", cardSource: "PR NEWSWIRE",
                            cardPeraghaph: "The North American Olive Oil Association''s 2024 testing program — the most comprehensive ever conducted in the US — sampled 153 olive oils from brands with over 1% national market share. Yale biostatistician Dr. Tassos Kyriakides found no instances of adulteration against IOC standards. The program also assessed phenolic compound levels noting that drought-stressed oils showed variable polyphenol concentrations.",
                            cardLink: "https://www.prnewswire.com/news-releases/nations-most-comprehensive-olive-oil-testing-302546838.html"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Consumption and Blood Pressure: Meta-Analysis of 32 Clinical Trials",
                            cardDate: "2019-08-07", cardSource: "MDPI",
                            cardPeraghaph: "A comprehensive meta-analysis published in Nutrients analyzed 32 randomized controlled trials examining the effect of olive oil consumption on systolic and diastolic blood pressure. Results showed that consuming EVOO as the primary dietary fat was associated with a statistically significant reduction in systolic blood pressure of approximately 2.5 mmHg, strongest in participants with pre-existing hypertension.",
                            cardLink: "https://www.mdpi.com/2072-6643/11/8/1863"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Polyphenols Protect Against Non-Alcoholic Fatty Liver Disease",
                            cardDate: "2020-06-29", cardSource: "NCBI",
                            cardPeraghaph: "A clinical study from Spain''s University of Córdoba found that patients with non-alcoholic fatty liver disease who consumed a diet enriched with high-polyphenol EVOO for 12 weeks showed significant reductions in liver fat content, ALT enzyme levels, and inflammatory markers compared to a control group. Hydroxytyrosol was identified as the primary protective compound.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7352724/"},
                        {
                        cardImg: brimg1, cardHeading: "Extra Virgin Olive Oil Improves Bone Mineral Density: Evidence from the PREDIMED-Plus Trial",
                            cardDate: "2021-06-17", cardSource: "NCBI",
                            cardPeraghaph: "Analysis of data from the PREDIMED-Plus trial found that participants in the Mediterranean diet arm with high EVOO consumption maintained significantly better bone mineral density over three years compared to the low-fat diet control group. Researchers attribute the effect to olive oil''s phenolic compounds activating osteoblast activity and suppressing osteoclast-mediated bone resorption.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8226049/"},
                        {
                        cardImg: brimg1, cardHeading: "Microplastics Detected in Italian Olive Oils: New Imaging Technique Maps Contamination",
                            cardDate: "2025-12-01", cardSource: "Olive Oil Times",
                            cardPeraghaph: "A December 2025 study using advanced near-infrared imaging techniques detected microplastic particles in 12 of 16 Italian extra virgin olive oil samples tested. Researchers found contamination levels below current safety thresholds, but called for standardized monitoring protocols and updated packaging guidelines prioritizing glass and tin over plastic-lined containers.",
                            cardLink: "https://www.oliveoiltimes.com/food-and-cooking/researchers-detect-microplastics-italian-olive-oils/129054"},
                        {
                        cardImg: brimg1, cardHeading: "Oleic Acid from Olive Oil Strengthens Immune Response Against Cancer Cells",
                            cardDate: "2023-07-21", cardSource: "Olive Oil Times",
                            cardPeraghaph: "A 2023 study published in Nature Communications found that oleic acid — the primary monounsaturated fatty acid in olive oil — promotes the anti-tumor activity of T-cells by enhancing their mitochondrial function and oxidative phosphorylation. Cancer patients with higher dietary oleic acid levels showed stronger immune responses during immunotherapy treatment.",
                            cardLink: "https://www.oliveoiltimes.com/health-news/study-links-oleic-acid-stronger-immune-response-cancer-patients/116789"},
                        {
                        cardImg: brimg1, cardHeading: "Virgin Olive Oil Improves Vascular Function in Hyperlipidemia Patients: RCT Results",
                            cardDate: "2025-12-15", cardSource: "Olive Oil Times",
                            cardPeraghaph: "A randomized controlled trial published in December 2025 found that eight weeks of daily virgin olive oil consumption significantly improved flow-mediated dilation — a key measure of vascular endothelial function — in patients with hyperlipidemia. The improvement was significantly greater than in the control group receiving refined olive oil, suggesting polyphenols rather than fatty acids drive the vascular benefit.",
                            cardLink: "https://www.oliveoiltimes.com/health-news/study-finds-extra-virgin-olive-oil-improves-vascular-function-hyperlipidemia-patients/129102"},
                        {
                        cardImg: brimg1, cardHeading: "Gut Health and Cognitive Decline: Olive Oil as the Linking Dietary Factor",
                            cardDate: "2026-01-22", cardSource: "Olive Oil Times",
                            cardPeraghaph: "A January 2026 study tracked 4,200 adults for six years and found that those consuming EVOO daily had both a more diverse gut microbiome and significantly slower rates of cognitive decline on standardized assessments. The gut-brain axis mediated approximately 40% of olive oil''s neuroprotective effect, highlighting fermentation of olive polyphenols by intestinal bacteria as a key mechanism.",
                            cardLink: "https://www.oliveoiltimes.com/health-news/study-virgin-olive-oil-gut-health-cognitive-decline/130201"},
                        {
                        cardImg: brimg1, cardHeading: "Epigenetic Changes Triggered by Olive Oil Polyphenols: New Gene-Level Evidence",
                            cardDate: "2024-07-10", cardSource: "NCBI",
                            cardPeraghaph: "A 2024 study published in the journal Epigenetics & Chromatin found that regular consumption of high-polyphenol EVOO induces measurable DNA methylation changes at genes involved in inflammation regulation, lipid metabolism, and oxidative stress response. The researchers suggest that olive oil''s health effects may be partially inherited across generations through epigenetic reprogramming.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11220000/"},
                        {
                        cardImg: brimg1, cardHeading: "Children Who Consume EVOO Regularly Show Lower Inflammatory Markers: 5-Year Study",
                            cardDate: "2022-09-18", cardSource: "NCBI",
                            cardPeraghaph: "A Spanish longitudinal study tracked 1,200 children from age 6 to 11 and found that those with the highest household olive oil consumption had significantly lower levels of C-reactive protein, IL-6, and TNF-α. The authors conclude that introducing EVOO early in childhood may establish protective anti-inflammatory baselines that persist into adulthood.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9511220/"},
                        {
                        cardImg: brimg1, cardHeading: "Oleuropein Supplementation Reduces Arthritis Markers by 35% in Double-Blind Trial",
                            cardDate: "2022-03-25", cardSource: "NCBI",
                            cardPeraghaph: "A double-blind placebo-controlled trial in 80 adults with rheumatoid arthritis found that oral oleuropein supplementation equivalent to 40g daily of EVOO reduced pain scores, CRP, and joint swelling by 35% over 12 weeks. The trial provides the first direct evidence that isolated olive polyphenols can replicate the anti-arthritic effects observed in Mediterranean diet population studies.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8991440/"},
                        {
                        cardImg: brimg1, cardHeading: "Olive Oil Reduces Obesity Risk: 8-Year Mediterranean Cohort Data",
                            cardDate: "2020-07-14", cardSource: "NCBI",
                            cardPeraghaph: "Analysis of 7,400 participants in the SUN cohort study in Spain found that individuals in the highest quartile of olive oil consumption had a 22% lower risk of developing overweight or obesity over eight years, despite similar total caloric intake. Researchers attribute the effect to olive oil''s influence on satiety hormones, adipogenesis pathways, and gut microbiome composition.",
                            cardLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7352888/"},
                        
    ]

        // lndscapes item array
    const itemLaandscaapesDetails = [  
                        {
                        cardImg: landscapImg1, cardHeading: "Andalusia: Where 300 Million Olive Trees Shape a Landscape and a Culture",
                            cardDate: "2023-05-18", cardSource: "Olive Oils from Spain",
                            cardPeraghaph: "Spain''s Andalusia region produces more olive oil than any country outside Spain itself — accounting for roughly 75% of national and 30% of global output. The endless silver-green sea of olive trees stretching across Jaén, Córdoba, Sevilla, and Granada provinces is a UNESCO Intangible Cultural Heritage nominee. This portrait explores how the olive has shaped Andalusian architecture, cuisine, economy, and identity over 3,000 years.",
                            cardLink: "https://www.oliveoilsfromspain.org/regions/"},
                        {
                        cardImg: brimg1, cardHeading: "Kalamata Region: The Home of Greece''s Most Famous Protected Olive Oil",
                            cardDate: "2023-07-14", cardSource: "Greek Liquid Gold",
                            cardPeraghaph: "The Kalamata PDO designation — one of the oldest in the world — covers olive oil produced from the Koroneiki variety in the Laconia and Messinia regions of the Peloponnese. This deep-dive explores the unique terroir of the rugged Taygetos mountains, the traditional hand-harvesting techniques still practiced by over 40,000 smallholder farmers, and why Kalamata EVOO consistently ranks among the world''s most polyphenol-rich oils.",
                            cardLink: "https://www.greekliquidgold.com/index.php/en/kalamata-pdo"},
                        {
                        cardImg: brimg1, cardHeading: "Inside Sicily''s Nocellara Belt: The Producers Reviving an Ancient Cultivar",
                            cardDate: "2023-09-22", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The Valle del Belice in western Sicily is home to the Nocellara del Belice — a dual-purpose olive prized both as a table olive and for its intensely fruity, tomato-scented oil. This portrait profiles five producers across Castelvetrano, Partanna, and Santa Ninfa who are reviving abandoned traditional groves using organic methods, and explores how the area''s basalt-rich soils impart the variety''s distinctive flavor profile.",
                            cardLink: "https://www.oliveoiltimes.com/world/sicily-nocellara-belt-producers/118654"},
                        {
                        cardImg: brimg1, cardHeading: "Tunisia''s Olive Heritage: 68 Million Trees and 2,800 Years of Continuous Cultivation",
                            cardDate: "2022-04-11", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Tunisia is home to more olive trees per capita than any other country on earth, and its olive oil heritage stretches back to Carthaginian times. The country''s diverse producing regions — from the arid Sfax groves (the world''s largest contiguous olive forest) to the northern highlands around Bizerte — produce oils of dramatically different character. This guide maps Tunisia''s six main olive oil regions and the native varieties that define each.",
                            cardLink: "https://www.oliveoiltimes.com/world/tunisias-olive-heritage/95782"},
                        {
                        cardImg: brimg1, cardHeading: "California''s Olive Oil Renaissance: How the Central Valley Became a World-Class Producer",
                            cardDate: "2023-10-01", cardSource: "",
                            cardPeraghaph: "California now produces over 4 million gallons of olive oil annually, making it the largest producing region in the Americas. The Sacramento Valley''s flat terrain, hot summers, and cool nights have proven ideal for super-high-density olive production, while small artisan producers in Napa, Sonoma, and the Santa Ynez Valley have positioned California EVOO as a premium global brand.",
                            cardLink: "https://cooc.com/california-olive-oil-industry/"},
                        {
                        cardImg: brimg1, cardHeading: "Palestine''s Ancient Olive Groves: Heritage, Resilience, and the Fight for Survival",
                            cardDate: "2022-10-14", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Palestinian olive groves are among the oldest in the world — with trees in Bethlehem estimated at over 5,000 years old. Olive cultivation underpins the livelihoods of 100,000 Palestinian farming families and covers 45% of all cultivated land in the West Bank. This deeply reported piece explores the cultural significance of the olive in Palestinian identity, the threats to these ancient groves, and the global organizations working to preserve them.",
                            cardLink: "https://www.oliveoiltimes.com/world/palestines-ancient-olive-groves/101234"},
                        {
                        cardImg: brimg1, cardHeading: "Morocco Rising: How Atlas Mountain Producers Are Winning Gold at the NYIOOC",
                            cardDate: "2024-06-18", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Morocco has emerged as one of the most dynamic olive oil producing nations in the world, with NYIOOC Gold Award wins rising 300% between 2018 and 2024. The secret lies in the country''s remarkable terroir diversity — from the volcanic soils of the Middle Atlas to the Atlantic-influenced plains near Marrakech — and a new generation of quality-focused producers using modern milling technology on century-old Picholine Marocaine trees.",
                            cardLink: "https://www.oliveoiltimes.com/world/morocco-nyiooc-gold-award-wins/125678"},
                        {
                        cardImg: brimg1, cardHeading: "Tuscany''s Frantoio Season: Inside an Italian Olive Oil Mill During Harvest",
                            cardDate: "2021-11-20", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Each November, Tuscany''s frantoi (oil mills) come alive for the pressing season — a weeks-long community event where farmers queue with their hand-harvested olives for immediate pressing. This immersive portrait of the Frantoio Franci mill in Grosseto takes readers inside the crushing room, explains why same-day pressing is critical for Tuscan oil quality, and captures the social rituals of bruschetta con l''olio nuovo that mark the season''s opening.",
                            cardLink: "https://www.oliveoiltimes.com/world/tuscanys-olive-oil-harvest-season/87654"},
                        {
                        cardImg: brimg1, cardHeading: "Australia''s Margaret River: Building a Sustainable Olive Industry from Scratch",
                            cardDate: "2022-03-08", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Australia had virtually no commercial olive oil industry before 1990. Three decades later, the country produces award-winning EVOO from Western Australia''s Margaret River, South Australia''s Barossa Valley, and Victoria''s Goulburn Valley. This story of rapid agricultural development explores how Australian producers used modern agronomy, EU-trained sensory panels, and strong traceability systems to build a credibility that has earned them consistent recognition at global competitions.",
                            cardLink: "https://www.oliveoiltimes.com/world/australias-olive-industry-development/78901"},
                        {
                        cardImg: brimg1, cardHeading: "The Olive Tree in Ancient History: 6,000 Years from the Levant to the World",
                            cardDate: "2020-06-01", cardSource: "",
                            cardPeraghaph: "Botanical and archaeological evidence places the first domestication of the olive tree (Olea europaea) in the northern Levant — modern-day Syria, Lebanon, and Palestine — around 4000 BCE. From there, Phoenician and Greek traders spread cultivation across the Mediterranean basin, and Roman agricultural texts describe sophisticated grove management techniques still recognizable today.",
                            cardLink: "https://www.internationaloliveoil.org/olive-world/the-olive-in-history/"},
                        {
                        cardImg: brimg1, cardHeading: "The 2026 NYIOOC: Record Entries and New Champions from 29 Countries",
                            cardDate: "2026-04-16", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The 2026 NYIOOC World Olive Oil Competition received a record 1,341 entries from 29 countries, with producers from Croatia, Montenegro, and Algeria earning top awards for the first time. Spain and Italy maintained their dominance, but the competition''s analysis team noted a significant quality shift — early-harvest, high-polyphenol oils now dominate the Gold Award category, reflecting a global consumer education trend toward health-conscious purchasing.",
                            cardLink: "https://www.oliveoiltimes.com/business/2026-nyiooc-results/131456"},
                        {
                        cardImg: brimg1, cardHeading: "Lebanon''s Olive Oil Renaissance: Ancient Varieties Making a Global Comeback",
                            cardDate: "2025-02-14", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Lebanon''s ancient Soury and Ayrouni olive varieties — some cultivated in the same villages for over 2,000 years — are attracting international attention as producers rebuild after years of economic crisis. A new generation of Lebanese agronomists is combining ancestral knowledge with modern milling technology, producing oils with unique flavor profiles that stand apart from the mainstream Mediterranean styles.",
                            cardLink: "https://www.oliveoiltimes.com/world/lebanon-olive-oil-renaissance/128976"},
                        {
                        cardImg: brimg1, cardHeading: "From Puglia with Purpose: How Masseria Monaci is Redefining Coratina",
                            cardDate: "2024-01-25", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The Coratina olive variety — native to the Corato area of Puglia — produces some of the highest-polyphenol oils in the world, but its extreme bitterness and pungency have historically limited its commercial appeal. A group of progressive Puglian producers are changing this narrative, releasing single-variety Coratina oils that showcase its medical-grade phenolic content (often exceeding 1,000mg/kg) as a feature rather than a flaw.",
                            cardLink: "https://www.oliveoiltimes.com/world/puglia-coratina-producers/119876"},
                        {
                        cardImg: brimg1, cardHeading: "Portugal''s Alentejo: How the World''s Largest Contiguous Olive Estate Redefined Premium Production",
                            cardDate: "2024-04-05", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The Herdade do Esporão in Portugal''s vast Alentejo plain — over 700 hectares of continuous olive grove — has become a model for large-scale, quality-focused production. Using a combination of traditional Portuguese varieties (Cobrançosa, Galega, Verdeal) and super-high-density plantings of Arbequina, the estate produces award-winning certified organic EVOO while maintaining habitat corridors for birds and maintaining full carbon accounting.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Croatia''s Dalmatian Coast: Ancient Oblica Trees Winning Gold at the World''s Biggest Competitions",
                            cardDate: "2026-03-05", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Dalmatia''s Oblica variety — grown on terraced stone plots above the Adriatic since at least the 3rd century BCE — is generating extraordinary international competition results. Retired math teacher Drago Malić won Croatia a 2026 NYIOOC Gold Award from a grove of 40-year-old Oblica trees on the island of Brač, producing an oil with 650mg/kg polyphenols that stunned the judging panel with its intensity and complexity.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Turkey''s Aegean Olive Belt: Ancient Groves, Native Varieties, and a New Export Ambition",
                            cardDate: "2025-11-18", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Turkey is the world''s fourth-largest olive oil producer, yet its excellent oils remain largely unknown internationally — most production is consumed domestically or exported in bulk to EU bottlers. A new generation of Turkish producers from the Aegean provinces of İzmir, Aydın, and Muğla are bottling award-winning single-variety oils from native cultivars like Memecik, Ayvalık, and Domat, targeting premium export markets in North America and Japan.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Sardinia''s Bosana: The Island Variety That Produces One of the World''s Most Polyphenol-Rich Oils",
                            cardDate: "2023-08-10", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Sardinia''s native Bosana cultivar — grown almost exclusively on the rugged volcanic plateau of the Nurra in the island''s northwest — regularly produces oils with over 800mg/kg total polyphenols, placing it among the highest in the world. The variety''s intense green-olive fruitiness, combined with persistent peppery bitterness from oleocanthal, has attracted international attention as polyphenol-conscious consumers seek medicinal-grade EVOOs.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Crete''s Olive Civilization: How 35 Million Trees Define an Island''s Identity",
                            cardDate: "2023-11-01", cardSource: "Greek Liquid Gold",
                            cardPeraghaph: "Crete has an olive tree-to-human ratio of approximately 35:1 — the highest in Greece and among the highest anywhere in the world. The island''s 7,000-year olive heritage is visible in its archaeology (olive presses from 2,500 BCE at the Minoan palace of Akrotiri), its cuisine, and its remarkable biodiversity of wild and cultivated varieties. Cretan EVOO, made almost exclusively from Koroneiki, is exported to over 40 countries.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Argentina''s Mendoza: How Wine Country Became World-Class Olive Oil Territory",
                            cardDate: "2023-05-22", cardSource: "Olive Oil Times",
                            cardPeraghaph: "At 600–900 meters altitude in the foothills of the Andes, Mendoza''s dry, continental climate — borrowed sun, borrowed wind, borrowed frost — has proven ideal for high-polyphenol olive production. Argentina''s olive oil exports now exceed 35,000 tonnes annually, with Mendoza producers like Laur, Zuccardi, and Familia Zossi winning repeated NYIOOC and WBOO recognition for their single-variety Arbequina, Coratina, and Picual oils.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Chile''s Atacama-Edge Producers: Extreme Aridity Creating Extraordinary Olive Oils",
                            cardDate: "2022-08-29", cardSource: "Olive Oil Times",
                            cardPeraghaph: "In Chile''s Norte Chico region — where the Atacama Desert meets the first Mediterranean zone — a handful of producers are exploiting extreme water stress, intense UV radiation, and dramatic day-night temperature swings to produce high-polyphenol EVOOs that consistently punch above their weight internationally.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Umbria''s Green Gold: How Italy''s Landlocked Region Became Synonymous with Peppery Excellence",
                            cardDate: "2022-10-28", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Umbria''s olive oil tradition centers on the harsh, cold-tolerant Moraiolo variety grown on the steep hillsides around Spoleto, Trevi, and the slopes of Monte Subasio. The region''s PDO designation — Umbria DOP — covers five sub-zones, each with distinct flavor profiles dictated by altitude, soil pH, and variety blend. Umbrian oils are known globally for their extreme bitterness and pungency — a signature that has become a mark of prestige.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Jordan''s Wild Rumi Olives: The Oldest Living Food Trees on Earth",
                            cardDate: "2022-02-20", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The Bisan Valley in northern Jordan is home to groves of wild Rumi olive trees — a native Jordanian variety — some of which have been independently dated at over 4,000 years old using carbon-14 analysis and dendrological ring counting. These trees predate the Roman Empire. Jordanian conservation programs are now protecting and propagating Rumi alongside modern commercial plantings of the same variety.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "South Africa''s Swartland: How a Wheat Belt Became an Award-Winning Olive Region",
                            cardDate: "2025-06-23", cardSource: "Olive Oil Times",
                            cardPeraghaph: "South Africa''s Swartland district — traditionally the country''s wheat heartland — has transformed in two decades into one of the southern hemisphere''s most exciting olive oil regions. The Willow Creek cooperative, bringing together 35 Swartland growers, produces oils from Mission, Frantoio, and Coratina varieties that consistently earn NYIOOC recognition. The region''s Atlantic-influenced Mediterranean climate and granite soils produce oils of distinctive minerality.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Liguria''s Taggiasca: The Tiny Olive That Shaped a Regional Cuisine",
                            cardDate: "2021-08-15", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Liguria, Italy''s narrow coastal strip between the Alps and the Ligurian Sea, produces one of the world''s most distinctive olive oils from the tiny Taggiasca variety. The oil is delicate, buttery, and sweet — a complete contrast to powerful Tuscan and Puglian styles — perfectly suited to Ligurian cuisine''s seafood, pesto, and farinata dishes. The region''s vertiginous dry-stone terraces, some over a thousand years old, are themselves a landscape heritage site.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Algeria''s Kabylie Region: Ancient Varieties Finding New Global Recognition",
                            cardDate: "2026-04-16", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Algeria''s Kabylie mountains in the north — where Berber farmers have cultivated olives for over 3,000 years using terraced stone-wall systems — are producing oils from native varieties including Chemlali, Sigoise, and Rougette that are beginning to appear in international competitions. Dahbia Olive Oil from the Djelfa plateau won a Silver Award at the 2026 NYIOOC, signaling Algeria''s emergence as a quality producer.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Provence''s Olive Oil Revival: From Near-Extinction to Protected Appellation",
                            cardDate: "2022-12-06", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The brutal winter freeze of February 1956 destroyed an estimated 80% of Provence''s olive trees in a single night, nearly ending a tradition dating to Greco-Roman times. Seventy years later, Provençal olive oil has made a remarkable comeback — now protected under two AOC appellations (Aix-en-Provence and Vallée des Baux) and produced from a unique blend of varieties including Aglandau, Salonenque, Picholine, and Grossane found nowhere else in the world.",
                            cardLink: ""},
                        {
                        cardImg: brimg1, cardHeading: "Montenegro''s Bar: A Public Mill Combining Innovation, Education, and Tradition",
                            cardDate: "2026-03-30", cardSource: "Olive Oil Times",
                            cardPeraghaph: "In Montenegro''s olive-growing center of Bar, a publicly owned cooperative mill is combining innovation, education, and centuries of Montenegrin olive tradition. The mill — which processes olives from over 1,200 local farmers — has installed modern two-phase centrifugal extraction while maintaining organic certification across its entire supply chain. It also runs a regional olive oil school, certifying producers and educators across the Western Balkans.",
                            cardLink: ""}
    ]

    // acadmey item array
    const itemAcadmeyDetails = [
                    {
                        cardImg: brimg1, cardHeading: "The Complete Guide to Olive Tree Pruning: Timing, Technique and Tools",
                            cardDate: "2022-09-01", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "Proper pruning is the single most important management practice for achieving consistent olive yields and high-quality fruit. This comprehensive guide covers the three main pruning systems — vase, globe, and central leader — with detailed guidance on timing (ideally just after harvest in late autumn), the tools required, and how to avoid the common mistake of over-pruning which depletes the tree''s energy reserves.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "From Grove to Bottle: Understanding the Cold-Press Extraction Process",
                            cardDate: "2023-03-10", cardSource: "North American Olive Oil Association",
                            cardPeraghaph: "Cold-press extraction is the defining process that separates extra virgin olive oil from lower grades. This detailed walkthrough explains the four stages — washing, crushing, malaxation, and separation — explaining why temperature control below 27°C is critical to preserving polyphenols and volatile aromatics. Includes a comparison of traditional stone mill vs. modern centrifugal decanter systems.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "How to Read an Olive Oil Label: A Complete Decoder for Consumers",
                            cardDate: "2023-06-15", cardSource: "North American Olive Oil Association",
                            cardPeraghaph: "Most olive oil labels are designed to be beautiful rather than informative. This guide teaches consumers how to decode every element: why a harvest date matters more than a best-before date, what cold extracted vs. cold pressed means legally, how to interpret acidity levels, and what PDO/PGI/DOP designations actually guarantee about quality and origin.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "The World''s 139 Most Important Olive Varieties: An Illustrated Reference",
                            cardDate: "2023-01-20", cardSource: "international olympic council",
                            cardPeraghaph: "The International Olive Council maintains a world catalog of 1,057 registered olive cultivars, but a core group of 139 varieties accounts for most global production and commerce. This illustrated reference covers the 20 most commercially significant, including Picual (Spain), Koroneiki (Greece), Arbequina (Spain/California), Frantoio (Italy), and Nocellara del Belice (Sicily), with flavor profiles, agronomic traits, and ideal growing regions.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Sensory Evaluation of Olive Oil: How Professional Tasters Grade EVOO",
                            cardDate: "2022-11-05", cardSource: "international olympic council",
                            cardPeraghaph: "The IOC''s official sensory evaluation method uses a panel of 8–12 trained tasters who assess olive oil blind in dark blue glasses to eliminate color bias. This guide explains the 14 positive attributes (fruity, bitter, pungent) and 12 negative defects (rancid, fusty, muddy) that tasters evaluate, how median scores determine oil classification, and how you can train your own palate at home.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Organic Olive Farming: Transitioning from Conventional to Certified Organic Production",
                            cardDate: "2021-05-12", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Transitioning an olive grove to certified organic production typically takes three years — the required conversion period before the first certified organic harvest. This practical guide covers the key decisions: which approved bio-pesticides and fertilizers to use, how to manage the Bactrocera oleae (olive fruit fly) organically using kaolin clay and mass trapping, soil health building through cover crops, and the economics of organic price premiums.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Understanding Olive Oil Grades: Extra Virgin, Virgin, Refined and Pomace Explained",
                            cardDate: "2023-09-01", cardSource: "international olympic council",
                            cardPeraghaph: "Not all olive oil is created equal — the IOC recognizes eight distinct commercial grades based on free acidity, sensory properties, and production method. This explainer demystifies the full hierarchy from extra virgin (acidity ≤0.8%, zero defects) through to olive-pomace oil, explaining which grades are appropriate for different culinary uses and why the pure and light labels on supermarket shelves are marketing terms, not quality indicators.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Irrigation Strategies for Olive Groves: Optimizing Yield Without Sacrificing Polyphenol Content",
                            cardDate: "2020-08-15", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "Olive trees are remarkably drought-tolerant, but strategic irrigation is the difference between a mediocre harvest and an exceptional one. Research from Spain''s IFAPA institute shows that regulated deficit irrigation — supplying 50% of crop water demand during pit hardening — can increase polyphenol content by up to 40% while maintaining yield. This guide presents a practical irrigation calendar for Mediterranean and California climates.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "The Science of Olive Oil Storage: Why Light, Heat and Air Are Your Oil''s Enemies",
                            cardDate: "022-02-20", cardSource: "North American Olive Oil Association",
                            cardPeraghaph: "Extra virgin olive oil is a living product that degrades through three main pathways: photo-oxidation (light), thermal oxidation (heat), and atmospheric oxidation (oxygen). Studies show that EVOO stored in clear glass at room temperature can lose 40% of its polyphenol content within two months. This guide provides evidence-based storage recommendations and explains why dark glass, stainless steel, and cool temperatures are non-negotiable for preserving quality.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Early vs. Late Harvest: How Picking Time Determines the Character of Your Oil",
                            cardDate: "2020-10-05", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The harvest window is the single most consequential decision an olive farmer makes each season. Early-harvest oils (October–November, when olives are turning from green to purple) yield lower quantities but dramatically higher polyphenol concentrations and more complex grassy, peppery flavors. Late-harvest oils are milder, fruitier, and higher yielding but significantly lower in protective antioxidants. Understanding this trade-off is fundamental to appreciating EVOO quality.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Planting Your First Olive Grove: Site Selection, Spacing and Variety Choice",
                            cardDate: "2021-03-01", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "Olive cultivation has expanded to every continent except Antarctica, but success depends heavily on site selection. Olives require a minimum of 200 chilling hours below 7°C for proper fruit set, well-drained soils with pH 6–8, and at least 200mm annual rainfall. This beginner''s guide covers soil preparation, the choice between traditional (100 trees/ha) and super-high-density (1,500+ trees/ha) systems, self-fertile vs. cross-pollinating varieties, and first-year care.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Cooking with Extra Virgin Olive Oil: Debunking the Smoke Point Myth",
                            cardDate: "2023-11-08", cardSource: "North American Olive Oil Association",
                            cardPeraghaph: "The persistent myth that extra virgin olive oil is unsuitable for cooking is not supported by science. Research published in ACTA Scientific Nutritional Health shows that EVOO has a smoke point of 190–215°C, well above typical home cooking temperatures. More importantly, its high polyphenol and oleic acid content make it more resistant to oxidation at high heat than seed oils — meaning it forms fewer harmful compounds when used for sautéing, roasting, and even shallow frying.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "The Carbon Footprint of Olive Oil: Mediterranean Groves as Carbon Sink",
                            cardDate: "2020-01-10", cardSource: "Science Direct",
                            cardPeraghaph: "A lifecycle assessment published in the Journal of Cleaner Production found that traditional extensive olive groves in Spain sequester an average of 2.1 tonnes of CO₂ per hectare per year, while also supporting exceptional biodiversity — up to 5,000 arthropod species per grove. This analysis explores how regenerative olive farming practices can amplify these carbon sequestration benefits and why grove preservation is a climate priority.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Global Olive Oil Market 2024: Production, Prices, and the Supply Crisis",
                            cardDate: "2024-02-20", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The 2022–2024 olive oil supply crisis drove global prices to historic highs, with Spanish wholesale prices exceeding €9/kg — four times higher than 2021 levels. Driven by consecutive drought seasons in Andalusia, the world''s largest producing region, the crisis exposed the vulnerability of a market where Spain, Italy, Greece, and Tunisia account for over 90% of global production. This market analysis examines supply dynamics, demand trends, and the long-term climate risks to production.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Super-High-Density Olive Farming: How 1,600 Trees Per Hectare Changed the Industry",
                            cardDate: "2024-08-18", cardSource: "Agromillora",
                            cardPeraghaph: "Super-high-density (SHD) olive systems, pioneered in Spain in the 1990s, now cover over 100,000 hectares worldwide. By planting 600–1,600 trees per hectare in vineyard-style rows, SHD growers achieve full mechanical harvesting with over-the-row combines, entry into production by year three, and labor cost reductions of up to 80% compared to traditional systems. This guide explains the agronomic principles and economic trade-offs.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Olive Fruit Fly Management: Integrated Pest Control Without Chemicals",
                            cardDate: "2022-07-10", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "The Bactrocera oleae (olive fruit fly) is the most economically damaging pest in olive cultivation, potentially destroying up to 80% of a harvest. This guide covers the full integrated pest management (IPM) toolkit: mass trapping with pheromone attractants, kaolin clay barrier coatings, spinosad-based organic baits, biological control with parasitic wasps, and predictive monitoring models using temperature and humidity data.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Olive Mill Wastewater: The Environmental Problem Becoming a Cosmetic Goldmine",
                            cardDate: "2021-04-16", cardSource: "NVBI",
                            cardPeraghaph: "Olive mill wastewater (OMWW) — the dark liquid produced during olive oil extraction — is one of the Mediterranean''s most challenging agricultural pollutants, with extremely high phenolic content and low pH. Researchers are now repurposing this waste stream: OMWW is rich in hydroxytyrosol at concentrations of 200–4,000 mg/L, making it a high-value source for pharmaceutical and cosmetic extraction.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Drone Spraying in Olive Groves: How UAV Technology Cuts Pesticide Drift by 60%",
                            cardDate: "2024-01-04", cardSource: "NCBI",
                            cardPeraghaph: "A 2024 study from the University of Sevilla compared conventional orchard sprayers and UAV drone sprayers in a commercial super-high-density olive orchard. UAV spraying reduced airborne pesticide drift by 60% while maintaining adequate crop coverage, significantly lowering environmental contamination risk. The research supports drone integration as a precision agriculture tool for sustainable olive pest management.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Cover Crops in Olive Groves: Building Soil Biology While Cutting Erosion",
                            cardDate: "2022-04-18", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Bare soil between olive rows is one of the leading causes of topsoil erosion and microbial depletion in Mediterranean groves. This evidence-based guide covers the best cover crop species for different olive-growing climates — legumes for nitrogen fixing, cereals for organic matter, wildflower mixes for biodiversity — and explains how to manage mowing timing to avoid competition with olive roots during fruit set.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Table Olives: The Complete Guide to Traditional Brining, Lye Curing, and Dry Salt Methods",
                            cardDate: "2023-02-14", cardSource: "international olympic council",
                            cardPeraghaph: "Table olive processing is among the world''s oldest food preservation traditions — and one of the most chemically complex. This guide explains the three main curing methods: Spanish-style lye processing (NaOH debittering), Greek-style natural fermentation in brine, and Moroccan-style dry salt curing. Covers the microbiology of Lactobacillus-driven fermentation, brine salinity calculations, and how curing method determines the final flavor profile.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Blockchain Traceability in Olive Oil: How Technology Is Fighting Fraud",
                            cardDate: "2022-11-30", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Olive oil fraud costs the industry an estimated €1.5 billion annually. A new wave of blockchain-based traceability systems — including solutions from IBM Food Trust and specialized Mediterranean startups — allow consumers to scan a QR code and trace their bottle back to the specific grove, harvest date, mill, and batch analysis results. This guide explains how these systems work and what consumers should look for.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Packaging Science: Why Tin Beats Glass for Long-Distance Olive Oil Shipping",
                            cardDate: "2023-08-22", cardSource: "North American Olive Oil Association",
                            cardPeraghaph: "The packaging an olive oil travels in has a measurable impact on quality at the point of consumption. This technical comparison evaluates dark glass, tin, bag-in-box, and PET plastic against six quality parameters: UV light transmission, oxygen permeability, thermal conductivity, weight, cost, and environmental footprint. For retail, dark glass wins on presentation; for bulk and export, tin provides superior protection at lower carbon cost.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "The Leccino Olive: Italy''s Cold-Hardy Workhorse and Its Rising Global Presence",
                            cardDate: "2023-04-08", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Leccino, originating in Tuscany, is one of the world''s most cold-hardy commercial olive varieties — surviving frosts down to -10°C — making it the dominant cultivar in Italy''s northern growing regions and increasingly important in emerging cold-climate producers like Croatia and Slovenia. Its oil is delicate, buttery, and low in bitterness, making it commercially popular but challenged by lower polyphenol content than varieties like Moraiolo or Frantoio.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Water Stress and Olive Quality: The Counter-Intuitive Science of Drought Farming",
                            cardDate: "2021-09-15", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "Olive trees evolved under water scarcity — and moderate drought stress is now understood to be a quality driver rather than a liability. Research from Spain''s CSIC shows that trees experiencing controlled water deficit during the final oil accumulation phase (August–October) synthesize significantly higher concentrations of oleocanthal, hydroxytyrosol, and oleuropein compared to well-irrigated trees. This guide explains the stress physiology and how to apply it practically.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Biodynamic Olive Farming: Principles, Preparations, and Real-World Results",
                            cardDate: "2023-06-02", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Biodynamic agriculture applies Rudolf Steiner''s holistic farming philosophy — treating the farm as a self-sustaining organism governed by lunar and cosmic cycles. A growing number of premium olive producers in Italy, France, and Greece are adopting biodynamic certification (Demeter), claiming improvements in soil microbiome diversity, tree vitality, and oil aromatic complexity. This primer explains the core preparations (BD 500–508) and what the evidence says.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "How to Become an Olive Oil Sommelier: Training, Certification, and Career Paths",
                            cardDate: "2024-03-20", cardSource: "Olive Oil Times",
                            cardPeraghaph: "The Olive Oil Times Education Lab and several Mediterranean university programs now offer formal olive oil sommelier certification programs recognized by the International Olive Council. This guide explains the three main certification pathways, the core curriculum (chemistry, sensory analysis, agronomy, gastronomy), examination structure, and how certified sommeliers are finding careers in hospitality, retail buying, quality control, and journalism.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Frost Protection in Olive Groves: Risk Mapping, Varietal Selection, and Intervention Methods",
                            cardDate: "2020-12-10", cardSource: "Olive Center at UC Davis",
                            cardPeraghaph: "Frost is the most acute climate risk for olive cultivation at the margins of the tree''s growing range. This technical guide covers frost risk assessment using minimum temperature maps and phenological calendars, compares cold-hardiness across 20 major varieties (Leccino and Frantoio tolerate -10°C; Arbequina and Koroneiki are damaged at -7°C), and evaluates protective measures from wind machines to overhead irrigation frost protection.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "AI and Machine Learning in Olive Harvest: How Algorithms Are Predicting Peak Ripeness",
                            cardDate: "2024-09-15", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Spanish agri-tech company Trimble and Italian startup Unica are deploying machine learning models trained on multispectral drone imagery, historical yield data, and weather patterns to predict the optimal harvest window for individual grove blocks. Early adopters in Andalusia report a 15% improvement in polyphenol content and a 12% reduction in harvesting costs through more precise timing decisions.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Circular Economy in the Olive Sector: From Pomace to Power",
                            cardDate: "2023-01-10", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Olive pomace — the solid residue left after oil extraction — represents a major waste challenge and an equally major energy opportunity. This guide maps the full circular economy around the olive mill: pomace oil extraction, biomass combustion for mill energy, olive stone briquettes as solid fuel, compost from vegetation water, and the emerging field of biochar production from olive prunings. Several Spanish mills are now energy self-sufficient through these systems.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Soil Health Under Olive Trees: The Microbial Communities That Drive Fruit Quality",
                            cardDate: "2022-06-22", cardSource: "NCBI",
                            cardPeraghaph: "Soil biology beneath olive groves is dramatically more complex than previously understood. Research from Italy''s CREA agricultural research institution found that groves managed without synthetic herbicides and with mulch applications host up to 4x more diverse mycorrhizal fungi communities, which directly enhance olive tree nutrient uptake and stress resilience. This guide connects soil microbiology to fruit quality outcomes.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Single-Origin Olive Oil Tasting at Home: A Step-by-Step Guide to Developing Your Palate",
                            cardDate: "2023-10-05", cardSource: "Olive Oil / PJ KABOS",
                            cardPeraghaph: "Single-origin EVOO has arrived at the same cultural moment as specialty coffee — and the tasting approach is remarkably similar. This guide walks through setting up a home tasting session: the right temperature (28°C), glassware (blue or opaque), the warm-cup technique to release volatiles, and a structured evaluation of fruitiness (green vs. ripe), bitterness, and pungency. Includes a printable scoring sheet based on the IOC''s official tasting wheel.",
                            cardLink: ""},
                    {
                        cardImg: brimg1, cardHeading: "Why Are Australian Consumers Paying Premiums for Australian Olive Oil?",
                            cardDate: "2023-12-14", cardSource: "Olive Oil Times",
                            cardPeraghaph: "Australian-produced extra virgin olive oil commands price premiums of 40–120% over imported Mediterranean alternatives in Australian retail. A consumer research study from the Australian Olive Association surveyed 2,400 shoppers and found that freshness (harvest date proximity), country-of-origin trust, and sustainability credentials drove premium willingness to pay more than brand recognition or variety information.",
                            cardLink: ""},

    ]


const [currentCategoryArrayItems, setCurrentCategoryArrayItems] = useState(itemJournalDetails)

const [showFullArticalPage, setShowFullArticalPage] = useState(false)
const [fullarticalD , setFullarticalD] = useState({cardImg: "", cardHeading: "",
                            cardDate: "", cardSource: "",
                            cardPeraghaph: "",
                            cardLink: ""})
const [articalCategoreyBtn, setArticalCategoreyBtn] = useState("journal")





useEffect(()=>{
    if(articalCategoreyBtn == "journal"){
        setCurrentCategoryArrayItems(itemJournalDetails)
    }
    else if(articalCategoreyBtn == "academy"){
        setCurrentCategoryArrayItems(itemAcadmeyDetails)
    }
    else if(articalCategoreyBtn == "landscapes"){
        setCurrentCategoryArrayItems(itemLaandscaapesDetails)
    }
},[articalCategoreyBtn])

  return (
    <div className='brJournal'>
        <h1 className='startingH1tag'>Bori Roots Journal</h1>
        <p className='ptagAfterH1tag'>Stories, memories, and olive-growing wisdom from the heart of Balochistan.</p>

        <div className='brCategaroBtnSec'>
            <div className={`${articalCategoreyBtn == "journal"? " active": "" }`} onClick={()=> setArticalCategoreyBtn("journal")}>BoriRoots Journal</div>
            <div className={`${articalCategoreyBtn == "landscapes"? " active": "" }`} onClick={()=> setArticalCategoreyBtn("landscapes")}>Balochistan Landscapes</div>
            <div className={`${articalCategoreyBtn == "academy"? " active": "" }`} onClick={()=> setArticalCategoreyBtn("academy")}>Olive Academy</div>
        </div>

        <div className='brJournalCardSec'>

            {currentCategoryArrayItems.map((item,index) => {
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
    <div className= {`ShowFullDetail ${showFullArticalPage? "showFullArticalPage" : ""}`} style={{ backgroundImage: `url(${fullarticalD.cardImg})` }} >
            <div className='gobackBtn' onClick={()=> setShowFullArticalPage(false)}><TiArrowLeftThick /></div>
            <div className='articalSec'>
                {/* <h1 className='articalHeading startingH1tag'>{fullarticalD.cardHeading}</h1> */}
                <div  className='articalDetails'>
                    <div  className='articalImg' style={{ backgroundImage: `url(${fullarticalD.cardImg})` }}></div>
                    <div className='articalpSec'>
                        <h1 className='articalHeading startingH1tag'>{fullarticalD.cardHeading}</h1>
                        <p className='articalDate'>Date: <span>{fullarticalD.cardDate}</span></p>
                        <p className='articalSource'>Source: <span>{fullarticalD.cardSource}</span></p>
                        <p  className='articalParaghrap'> {fullarticalD.cardPeraghaph}</p>
                    </div>
                </div>
                
            </div>
    </div>

    </div>
  )
}

export default BRJournal