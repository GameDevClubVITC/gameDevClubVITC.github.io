import React from 'react'
import * as styles from '../styles/home.module.scss'

export default function Home() {
    return (
        <div className={styles.homeSection}>

            {/* Intro Animation */}
            <h1 className={styles.t1}>GAMING</h1>
            <h1 className={styles.t2}>TECH</h1>
            <h1 className={styles.t3}>REALITY</h1>

            <div className={styles.animX}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
            </div>
            
            <div className={styles.animSq}></div>

            <div className={styles.animCir}></div>

            <h2>GAME<br/>DEV<br/>CLUB</h2>
            <h3>VIT Chennai</h3>
            
        </div>
    )
}
