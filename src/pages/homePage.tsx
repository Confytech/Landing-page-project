import Banner from '../components/Banner'
import Cartegory from '../components/Cartegory'
import Hero from '../components/HeroSection'
import Honeymoon from '../components/Honeymoon'
import "../styles/global.css"
import styles from "../styles/homepage.module.css"

const homePage = () => {
  return (
    <div className={styles.container}>
{/* <Navbar/> */}
  <Hero/>
  <Banner/>
  <Cartegory/>
  <Honeymoon/>

    </div>
  )
}

export default homePage