import React from 'react'
import Navbar from "../Navbar";
import styles from "./styles.module.css";
const page2 = () => {
    return (
        <div className={styles.app}>
             <div className={styles.grid}>
            
                    <div className={`${styles.card} ${styles.color1}`}>
                    {/* Navbar */}
                        <Navbar page2="active"/>
                    {/* End of Navbar */}
                     </div>
           
                    <div className={`${styles.card} ${styles.color2}`}>

                    </div>
            </div>
    </div>
    )
}

export default page2
