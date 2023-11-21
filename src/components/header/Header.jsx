import React from "react";
import style from './header.module.css';
import img from '../../static/images/discordLogo.png';
// import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.header_menu}>
                <img className={style.header_logo} src={img} alt='logo'></img>
                {/* <Link className={style.link} to="/register">Registration</Link>
                <Link className={style.link} to="/login">Login</Link> */}
            </div>
        </div>
    );

}

export default Header;