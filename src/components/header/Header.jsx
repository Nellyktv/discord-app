import React from "react";
import style from './header.module.css';




const Header = (props) => {

    return (
        <div className={style.header}>
            <div className={style.header_menu}>
                <img className={style.header_logo} src={props.img} alt='logo'></img>
            </div>
        </div>
    );

}

export default Header;