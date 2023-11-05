import { Link, } from 'react-router-dom'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import PageNews from '../page/Page-news'
import App from '../App'
import headerStyles from '../style/header.module.scss'
import logo from '../image/logo.png'
const Header = () => {

    const [tab, setTab] = useState(false);
    const toggleMenu = () => {
        setTab(!tab);
    };


    return (
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles['header__container']}>
                    <nav className={headerStyles['header__menu']}>
                        <div className={headerStyles['header__menu-wrap']}>
                            <div className={headerStyles['header__logo']}>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div onClick={toggleMenu} className={headerStyles['header__tab']}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul className={`${headerStyles['header__ul']} ${tab ? headerStyles['header__active'] : ''}`}>
                                <Link onClick={toggleMenu} to='/Page-news' className={headerStyles.header__link}><li>Новини</li></Link>
                                <Link onClick={toggleMenu} to='/Page-info' className={headerStyles.header__link}><li>Про нас</li></Link>
                                <Link onClick={toggleMenu} to='' className={headerStyles.header__link}><li>Розклад</li></Link>
                                <Link onClick={toggleMenu} to='/Page-Command' className={headerStyles.header__link}><li>Команда</li></Link>
                                <Link onClick={toggleMenu} to='' className={headerStyles.header__link}><li>Подкасти</li></Link>
                                <Link onClick={toggleMenu} to='' className={headerStyles.header__link}><li>Контакти</li></Link>
                            </ul>
                        </div>
                        <div className={headerStyles['header__button-wrap']}>
                            <button className={headerStyles['header__button']}>Підтримати</button>
                        </div>
                    </nav>
                </div >
            </header >
        </>
    )
}

export default Header;