import React,{useState} from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {

  const [active, setActive] = useState("Home")
  return (
    <div className={styles.nav_main}>

      <div className={styles.nav_logo}>
          <div className={styles.nav_logo_text}>LOGO</div>
      </div>
      <div className={styles.nav_menu}>
          <div 
            className={`${styles.nav_menu_item} ${ active==="Home"? styles.active_menu_item:""} `}
            >
            Home
          </div>
          <div className={styles.nav_menu_item}>About Us</div>
          <div className={styles.nav_menu_item}>Services</div>
          <div className={styles.nav_menu_item}>Blog</div>
          <button type='button' className={styles.nav_menu_item_btn}> Contact Us </button>
      </div>
    </div>
  )
}

export default NavBar