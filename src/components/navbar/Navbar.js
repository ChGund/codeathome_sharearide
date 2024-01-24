import { Link, NavLink } from 'react-router-dom'
import LogoShapes from './LogoShapes.png'
import { useState } from 'react'

//styles
import styles from './Navbar.module.css'


export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
    <nav className={styles.navbar}>
        <div className={styles["logo-container"]}>   
        <img src={LogoShapes} alt="Logo" />
        </div>
        <h1 className={styles.title}>Share a Ride</h1>
        <div className={styles["hamburger-menu"]} onClick ={() =>
        setMenuOpen(!menuOpen)
        }>
            <span></span>
            <span></span>
            <span></span>
            <ul className={menuOpen ? styles.open : ""}>
            <li><Link to='/codeathome_final_project/login'>Sign in</Link></li>
            <li><NavLink to='/codeathome_final_project/signin'>Create account</NavLink></li>
            <li><NavLink to='/codeathome_final_project/search'>Search a ride</NavLink></li>
            <li><NavLink to='/codeathome_final_project/share'>Share a ride</NavLink></li>
            <li><NavLink to='/codeathome_final_project/about'>About us</NavLink></li>
            <li className={styles["sign-out"]}><Link to='/codeathome_final_project/login'>Sign out</Link></li>
        </ul>
        </div>
    </nav>
    {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>}
    </div>
  )
}
