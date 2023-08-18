import circle from "../assets/images/circle.svg"
import circle2 from "../assets/images/circle2.svg"
import circle3 from "../assets/images/circle3.svg"
import couple from "../assets/images/couple.svg"
import styles from "../styles/honeymoon.module.css"
const Honeymoon = () => {
  return (
     <div className={styles.flexRight}>
        <div  className={styles.imgContainer}>
    <img src={couple} alt=""  className={styles.couple}/>
    <img src={circle} alt="" className={styles.circle}/>
    <img src={circle2} alt="" className={styles.circle2} />
    <img src={circle3} alt="" className={styles.circle3} />

        </div>
        <div  className={styles.RightText}>
         <h3 className={styles.title}>Honeymoon Specials</h3>
         <h1 className={styles.Subtitle}>Our Romantic Tropical Destinations</h1>
         <p className={styles.text}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a 
            laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla 
            qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>

         <button className={styles.viewBtn}>View Packages</button>

        </div>
     </div>
  )
}

export default Honeymoon