import React from 'react'
import styles from './footer.module.css'
import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import x from '../../assets/x.png'
import lin from '../../assets/lin.png'


function footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.box1}>   
            <p>
            Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className={styles.form}>
                <form>
                    <input type="text" className={styles.in_mail} placeholder="Enter Your Email"/>
                    <button type="submit" className={styles.subbtn}>Subscribe</button>
                </form>
            </div>
        </div>
        <div className={styles.box2}>
            <div className={styles.box2_1}>
                <p>LOGO</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p>@Lorem</p>
            </div>
            <div className={styles.box2_2}>
                <div className={styles.box2_2_1}>
                    <p> About us</p>
                    <p>Lorem</p>
                    <p>Portfolio</p>
                    <p>Carrers</p>
                    <p>Contact Us</p>
                </div>
                <div className={styles.box2_2_2}>
                    <p> Contact us</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>+908 89097 890</p>
                </div>
            </div>
            <div className={styles.box2_3}>
                <div className={styles.box2_3_wrap}>
                    <div className={styles.box2_3_1}>
                        <img src={fb} alt="" />
                    </div>
                    <div className={styles.box2_3_2}>
                        <img src={insta} alt="" />

                    </div>
                    <div className={styles.box2_3_3}>
                        <img src={x} alt="" />

                    </div>
                    <div className={styles.box2_3_4}>
                        <img src={lin} alt="" />

                    </div>
                </div>
            </div>
        </div>
        <div className={styles.box3}> 
            <p>Copyright ® 2021 Lorem All rights Rcerved</p>
        </div>
    </div>
  )
}

export default footer