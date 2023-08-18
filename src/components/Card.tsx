// import Rectangle from "../assets/images/Rectangle.svg"
import styles from "../styles/category.module.css"
interface Props{
    children? : string     
     Text?:string
     subText? : string
    className? : string
    Image? : string
}

export const Card : React.FC<Props> = ({ Text, subText, Image, ...className} ) => {
  return (
    <div className={styles.card}>
         <div { ...className}   >
           <img src={Image} alt="" className={styles.image} />
            <h4 className={styles.text}>{Text}</h4>
            <p className={styles.subtext}>{subText}</p>          
            {/* <img src={Rectangle} alt="" className={styles.rectangle}/> */}
         </div>
      
    </div>
  )
}

