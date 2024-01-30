import React from 'react'
import styles from './home1.module.css'
import img1 from '../assets/website_content.svg'
import img2 from '../assets/seo-tag 1.svg'
import img3 from '../assets/immersive 1.svg'
import img4 from '../assets/coding (1) 1.svg'

function home1() {
  return (
    <>
        <div className={styles.main2}>
                <div className={styles.main2_wrap}>
                    <div className={styles.main2_e}>
                        <div className={styles.main2_e1_img}>
                            <img src={img1} alt="img1"/>
                        </div>
                        <div className={styles.main2_text_wrap}>
                            <div className={styles.main2_text1}>Web Applications</div>
                            <div className={styles.main2_text2}>Lorem Ipsum is Simply </div>
                        </div>
                    </div>
                    <div className={styles.main2_e}>
                        <div className={styles.main2_e2_img}>
                            <img src={img2} alt="img2"/>
                        </div>
                        <div className={styles.main2_text_wrap}>
                            <div className={styles.main2_text1}>SEO </div>
                            <div className={styles.main2_text2}>Lorem Ipsum is Simply </div>
                        </div>
                    </div>
                    <div className={styles.main2_e}>
                        <div className={styles.main2_e3_img}>
                            <img src={img3} alt="img3"/>
                        </div>
                        <div className={styles.main2_text_wrap}>
                            <div className={styles.main2_text1}>AR/VR Solutions </div>
                            <div className={styles.main2_text2}>Lorem Ipsum is Simply </div>
                        </div>
                    </div>
                    <div className={styles.main2_e}>
                        <div className={styles.main2_e4_img}>
                            <img src={img4} alt="img4"/>
                        </div>
                        <div className={styles.main2_text_wrap}>
                            <div className={styles.main2_text1}>Mobile Applications </div>
                            <div className={styles.main2_text2}>Lorem Ipsum is Simply </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className={styles.main3}>
            
        </div>
    </>
  )
}

export default home1