import React from 'react';
import SingleCategory from '../categories/singleCategory';
import styles from './categories.module.css';

import cat1 from '../../img/cat1.jpg';
import cat2 from '../../img/cat2.jpg';
import cat3 from '../../img/cat3.jpg';
import cat4 from '../../img/cat4.jpg';
import cat5 from '../../img/cat5.jpg'

export default function Categories() {
    const categoriesData = [
        {
            id: 1,
            title: 'Creative',
            img: cat1
        },
        {
            id: 2,
            title: 'Delicious',
            img: cat2

        },
        {
            id: 3,
            title: 'Inovative',
            img: cat3
        },
        {
            id: 4,
            title: 'Organic',
            img: cat4
        },
        {
            id: 5,
            title: 'Useful',
            img: cat5
        },

    ].map((item) => {
        return (
            <SingleCategory
                data={item}
            />


        )
    });
    return (
        <section className={styles.categories_part}>
            <div className={styles.categories_head}>Categories</div>
            <div className={styles.categories_nav}>
                <ul>
                    <li><a href="###" active>All</a></li>
                    <li><a href="###">Creative</a></li>
                    <li><a href="###">Delicious</a></li>
                    <li><a href="###">Organic</a></li>
                    <li><a href="###">Useful</a></li>
                </ul>
            </div>
            <div className={`${styles.categories} ${styles.container} `}> 
                {categoriesData}
            </div>
        </section>

    )
}
