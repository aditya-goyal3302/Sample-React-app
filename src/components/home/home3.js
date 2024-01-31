import React from 'react'
import styles from './home3.module.css'
import Bell from '../../assets/bell.png'
import Img1 from '../../assets/Frame 18.png'

function home3() {
  return (
    <>
    <div className={styles.main}>
        <div className={`${styles.main1} ${styles.box}`}>
            <div className={styles.box_txt}>
                <h1>Lorem Ipsum is simply dummy text.</h1>
                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            </div>
            <div className={styles.box_btns}>
                <button className={`${styles.box_btn} ${styles.box_btn1}`}>View More</button>
            </div>
        </div>
        <div className={`${styles.main2} ${styles.box}`}>
            <div className={styles.main_bell}>
                <img src={Bell} alt="bell" />
            </div>
            <div className={`${styles.box_txt} ${styles.box1_txt}`}>
                <h1>Lorem Ipsum is simply dummy text.</h1>
                <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            </div>
            <div className={styles.box_btns}>
                <button className={`${styles.box_btn} ${styles.box_btn2}`}>View More</button>
            </div>
        </div>
    </div>
    <div className={styles.main10}>
        <div className={styles.main10_txt}>
            <p>You will be in good Company</p>
        </div>
        <div className={styles.main10_img}>
            <img src={Img1} alt="img1" />
        </div>
    </div>
    </>
  )
}

export default home3