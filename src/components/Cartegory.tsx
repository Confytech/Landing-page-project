import hands from "../assets/images/hands.svg"
import medical from "../assets/images/medical-team 1.svg"
import Tour from "../assets/images/tour-guide 1.svg"
import travelling from "../assets/images/travelling 1.svg"
import styles from "../styles/category.module.css"
import { Card } from './Card'
const Cartegory = () => {
  return (
    <div className={styles.category}>
        <span className={styles.subheader}>Category</span>
        <h2 className={styles.header}>We Offer Best Services</h2>
        <div  className={styles.cardWrapper}>
        <Card className="" Image ={Tour}  Text = "Guided Tours" 
        subText='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'/> 

<Card className="" Image ={travelling}  Text = "Guided Tours" 
        subText='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'/> 

<Card className="" Image ={hands}  Text = "Guided Tours" 
        subText='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'/> 

<Card className="" Image ={medical}  Text = "Guided Tours" 
        subText='sunt qui repellat saepe quo velit aperiam id aliquam placeat.'/> 
           
       
        
        
        </div>
        
    </div>
  )
}

export default Cartegory