import React from 'react'
import styles from './styles.module.css'
import { AiFillBell, AiFillHome, AiOutlineFileJpg, AiOutlinePieChart, AiOutlineLineChart, AiOutlinePlayCircle, AiOutlineLogout } from "react-icons/ai";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <AiFillBell />
            </div>
            <div className={styles.navLinks}>
               <ul>
                  <li className={props.home}><AiFillHome /></li>
                 <li className={props.page2}><AiOutlineFileJpg /></li>
                   <li className={props.page3}><AiOutlinePieChart /></li>
                   <li className={props.page4}><AiOutlineLineChart /></li>
                   <li className={props.page5}><AiOutlinePlayCircle /></li>
               </ul>
            </div>
            <ul>
                <li><AiOutlineLogout /></li>
            </ul>
        </div>
    )
}

export default Navbar
