import React from 'react'
import styles from './home2.module.css'
import img1 from '../../assets/happy 1.svg'
import img2 from '../../assets/phone.png'
import img3 from '../../assets/layers.png'
import img4 from '../../assets/vr.png'




function home2() {
  return (
    <div className={styles.main}>
        <div className={styles.main1}>
            <div className={styles.main1_wrap1}>
                <div className={styles.main1_e}>
                    <div className={styles.main1_e1_img}>
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className={styles.main1_text_wrap}>
                        <div className={styles.main1_text1}>Lorem Ipsum is Simply Dummy Text</div>
                        <div className={styles.main1_text2}>Lorem Ipsum is Simply Dummy Text</div>
                    </div>
                </div>
                <div className={styles.main1_htext1}>
                    <span className={styles.bluetxt}>Lorem Ipsum</span> is Simply Dummy Text of the Printing.
                </div>
                <div className={styles.main1_htext2}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </div>
            </div>
            <div className={styles.main1_wrap2}>
                <img src={img2} alt="img2"/>
            </div>
        </div>
        <div className={styles.main2}>
            <div className={styles.main2_wrap2}>
                <img src={img3} alt="img2"/>
            </div>
            <div className={styles.main2_wrap1}>
                <div className={styles.main2_e}>
                    <div className={styles.main2_e1_img}>
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className={styles.main2_text_wrap}>
                        <div className={styles.main2_text1}>Lorem Ipsum is Simply Dummy Text</div>
                        <div className={styles.main2_text2}>Lorem Ipsum is Simply Dummy Text</div>
                    </div>
                </div>
                <div className={styles.main2_htext1}>
                    <span className={styles.bluetxt}>Lorem Ipsum</span> is Simply Dummy Text of the Printing.
                </div>
                <div className={styles.main2_htext2}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </div>
            </div>
        </div>
        <div className={styles.main3}>
            <div className={styles.main3_wrap1}>
                <div className={styles.main3_e}>
                    <div className={styles.main3_e1_img}>
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className={styles.main3_text_wrap}>
                        <div className={styles.main3_text1}>Lorem Ipsum is Simply Dummy Text</div>
                        <div className={styles.main3_text2}>Lorem Ipsum is Simply Dummy Text</div>
                    </div>
                </div>
                <div className={styles.main3_htext1}>
                    <span className={styles.bluetxt}>Lorem Ipsum</span> is Simply Dummy Text of the Printing.
                </div>
                <div className={styles.main3_htext2}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
                </div>
            </div>
            <div className={styles.main3_wrap2}>
                <img src={img4} alt="img2"/>
            </div>
        </div>
    </div>
  )
}

export default home2