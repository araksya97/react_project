import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faLemon, faCocktail, faWineGlassAlt, faGlassMartiniAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from './tasty.module.css';
import background from "../../img/bg_catpart.jpg";
export default function Tasty() {
    return (
        <div
            className={styles.tasty}
            style={{ backgroundImage: `url(${background})` }}>
            <div
                className={styles.tasty_bg}
            >

                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faIceCream} className={styles.tasty_icon}/>
                    </span> <span>ice cream</span>
                </div>
                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faLemon} className={styles.tasty_icon}/></span>
                    <span>fruit sorbets</span>
                </div>
                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faCocktail} className={styles.tasty_icon}/></span>
                    <span>chip flavors</span>
                </div>
                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faWineGlassAlt} className={styles.tasty_icon}/> </span>
                    <span>sundaes</span>
                </div>
                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faGlassMartiniAlt} className={styles.tasty_icon}/> </span>
                    <span>smoothies</span>
                </div>
                <div className={styles.tasty_part}>
                    <span><FontAwesomeIcon icon={faCoffee} className={styles.tasty_icon}/></span>
                    <span>more drinks</span>
                </div>
            </div>
        </div>
    )
};


