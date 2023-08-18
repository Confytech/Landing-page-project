import Eclipse from "../assets/images/Ellipse1.svg"
import Eclipse1 from "../assets/images/Ellipse2.svg"
import Eclipse2 from "../assets/images/Ellipse3.svg"
import Eclipse3 from "../assets/images/Ellipse4.svg"
// import Eclipse4 from "../assets/images/Ellipse5.svg"

import arrow from "../assets/images/arrowdown.png"
import heroLogo from "../assets/images/heroLogo.svg"
import styles from "../styles/hero.module.css"
import Navbar from "./Navbar"

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
    <Navbar/>
    <div className={styles.heroContainer} >
     <img src={heroLogo} alt="Hero logo" />
     <h1 className={styles.heroText}>No matter where you’re going to, we’ll take you there</h1>
     <div className={styles.heroFlex}>
     <div className={styles.heroNav}>
        <p> Where to ?</p>
    </div>
    <div className={styles.heroNav}>
    <p>
    Travel Type   <img src={arrow} alt="" /> 
    </p>
    </div>
    <div className={styles.heroNav}>
    <p>Duration  <img src={arrow} alt="" /></p>
    </div>
    <button className={styles.submitBtn}>Submit</button>
     </div>
     <div className ={styles.imgContainer} 
        
     >
        <span> <img src={Eclipse} alt="" /></span>
        <span><img src={Eclipse1} alt="" /></span>
        <span><img src={Eclipse2} alt="" /></span>
        <span><img src={Eclipse3} alt="" /></span>
        <span className={styles.paragraphs}>2,500 people booked Tommorow land Event in last 24 hours</span>
        {/* <span><img src={Eclipse4} alt="" /></span> */}
     </div>
    </div>
  
  
    
    </div>
  )
}

export default HeroSection