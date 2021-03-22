import React from "react";
import Navbar from "../Navbar";
import Card from "../UI/Card";
import styles from "./styles.module.css";

const Dashboard = () => {
  return (
    <div className={styles.app}>
             <div className={styles.grid}>
            
                    <div className={`${styles.card} ${styles.color1}`}>
                    {/* Navbar */}
                        {/* <Navbar home="active"/> */}
                    {/* End of Navbar */}
                    <div className={styles.grids}>
                    <Card />
                    <Card />
                    <Card />
                    </div>
                     </div>
           
                    <div className={`${styles.card} ${styles.color2}`}>

                    </div>
            </div>
    </div>
  );
};

export default Dashboard;
