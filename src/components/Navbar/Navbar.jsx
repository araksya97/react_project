import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
// import Search from '../Search/Search';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/logo.png';

export default class Navbar extends React.PureComponent {
    state = {
        active: false
    };
    toggleClass = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <>
                <div className={styles.navbar}>
                    <NavLink
                        to='/'
                        exact
                    >
                        <img
                            src={logo} alt="Logo"
                            className={styles.logo}
                        />
                    </NavLink>



                    {/* <div
                        className={styles.mobile_btn}
                        onClick={this.toggleClass}
                    >
                        <FontAwesomeIcon
                            icon={faBars} />

                    </div>
 */}

                    <div
                        className={`${styles.menu} ${this.state.active ? styles.activemenu : ''}`} >
                        <ul>
                            <li>
                                <NavLink
                                    to='/'
                                    exact
                                    activeClassName={styles.active}
                                    className={styles.navLink}
                                >
                                    Home
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    exact
                                    activeClassName={styles.active}
                                    className={styles.navLink}
                                >
                                    About
                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    exact
                                    activeClassName={styles.active}
                                    className={styles.navLink}
                                >
                                    Contact
                            </NavLink>
                            </li>
                        </ul>


                    </div>

                    {/* <button

                        onClick={this.toggleFilterBtn}
                        className={styles.filterIcon}
                    >
                        <FontAwesomeIcon icon={faFilter} />
                    </button> */}
                    

                </div>
                {/* { this.state.openFilter &&
                    <Search
                        onClose={this.toggleFilterBtn}
                    />
                } */}
                </>
        )
    }
};