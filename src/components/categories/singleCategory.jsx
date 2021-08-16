import React from 'react';
import styles from './categories.module.css';




function SingleCategory(props) {
    console.log(props)
    return (
        <div className={styles.category_item}>
            <a href="###">
                <div className={styles.img}><img src={props.data.img} alt="" /></div>
                <div className={styles.name}>
                    <div className={styles.title}>
                        {props.data.title}
                    </div>
                </div>
            </a>
        </div>

    )
}

export default SingleCategory
