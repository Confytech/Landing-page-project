 import { useState } from "react";
import drop from "../assets/images/drop.svg";
import Logo from "../assets/images/logo.svg";
import "../styles/global.css";
import styles from "../styles/navbar.module.css";
// interface Props {
//     title : string
// }


const Navbar = () => {
    const menus = [
        
          
          "Honeymoon Packages",
          "Tours Packages",
          "Musical Events",
          "Dashboard",
          "Build Package"
        
      ];
    const [dropdown, setDropDown] = useState(true);
    const toggle = () => setDropDown(!dropdown);
  return (
  <nav className={styles.navItem}> 
   <div className={styles.logo}>
    <img src={Logo}alt="" />
   </div>
   <div className={styles.listContainer}>
   <ul className={styles.navItems}>
        <li className={styles.item} id="homeActive">Home</li>
        <li className={styles.item}>About</li>
        <li className={styles.item}>Services <span className={styles.dropspan}><img src={drop} alt=""  onClick ={toggle}  /></span>     
        </li>
        <div className={dropdown ? styles.hide : ""} >
        <ul className= {styles.dropdown}>
        {menus.map((menu) => (
                <li className={styles.menu} >
                 {menu}
                </li>
              ))}
        </ul>
        </div>
    
   
      
          
        <li className={styles.item}>Upcoming Packages</li>
     </ul>
     <button className={styles.submitBtn}>Get in Touch</button>
   </div>


  </nav>
  )
}

export default Navbar