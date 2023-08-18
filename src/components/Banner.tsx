import bnb from "../assets/images/bnb.svg"
import emirate from "../assets/images/emirate.svg"
import swiss from "../assets/images/swiss.svg"
import travigo from "../assets/images/travigo.svg"
import turkish from "../assets/images/turkish.svg"
import styles from "../styles/banner.module.css"


const Banner = () => {
  return (
    <div className={styles.banner}>
        <span  className={styles.resp}><img src={emirate} alt="" /></span>
        <span><img src={travigo} alt="" className={styles.resp}/></span>
        <span><img src={bnb}alt="" className={styles.resp}/></span>
        <span><img src= {turkish} alt=""className={styles.resp} /></span>
        <span><img src={swiss} alt="" className={styles.resp}/></span>
    </div>
  )
}

export default Banner