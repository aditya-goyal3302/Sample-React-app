import React from 'react'
import styles from './Home.module.css'
import NavBar from '../Nav/NavBar'
import grp6 from '../../assets/Group6.png'
import Home1 from './home1'
import Home2 from './home2'
import Home3 from './home3'
import Footer from '../Nav/footer'

const Home = () => {


  return (
    <div >
        <NavBar />
        <div className={styles.main}>
            <div className={styles.main1}>
                <div className={styles.main1_content}>
                    <div className={styles.main1_text}>
                        <div className={styles.main1_text1}>Experienced<span className={styles.bluetxt}> mobile and web </span> applications
                            and website builders measuring.
                        </div>
                        <div className={styles.main1_text2}>
                        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                        </div>
                        <div className={styles.main1_text_btn}>
                            <button type='button' className={styles.main1_text_btn1}> Contact Us </button>
                            <button type='button' className={styles.main1_text_btn2}> View More </button>
                        </div>
                    </div>
                    <div className={styles.main1_image}>
                        <img src={grp6} alt="group6"/>
                    </div>
                </div>
                <span className={styles.cir_g2}></span>
                <span className={styles.cir_g1}></span>
            </div>
            <Home1/>
            <Home2/>
            <Home3/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home