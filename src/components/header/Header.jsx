import React from "react";
import style from './header.module.css';
import img from '../../static/images/discordLogo.png';


const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.header_menu}>
                <img className={style.header_logo} src={img} alt='logo'></img>
            </div>
        </div>
    );
}

export default Header;