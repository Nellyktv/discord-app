import React, { useState } from "react";
import style from "./authenticationForm.module.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";


const AuthenticationForm = (props) => {

    const registration = props.reg


    // Cтиль плейсхолдера темная тема
    const textDarkTheme = {
        label:
        {
            color: 'rgb(199, 191, 191)'
        },
        input:
        {
            color: 'rgb(199, 191, 191)'
        }
    };


    return (

        <div className={style.page}>

            <div className={style.container_wrapper}>
                {registration ?

                    <>
                        <p className={style.titleForm}>Создать учетную запись</p>

                        <TextField required variant="outlined" label="E-MAIL" labelColor='white' sx={textDarkTheme} ></TextField>
                        <TextField required variant="outlined" label="ИМЯ ПОЛЬЗОВАТЕЛЯ" sx={textDarkTheme}></TextField>
                        <TextField required variant="outlined" label="ПАРОЛЬ" sx={textDarkTheme}></TextField>

                        <button className={style.button}>Продолжить</button>
                        <Link className={style.link} to="/login">Уже зарегистрированы?</Link>
                    </>
                    :
                    <>
                        <p className={style.titleForm}>С возвращением!</p>
                        <p className={style.textWelcome}>Мы так рады видеть вас снова!</p>

                        <TextField required variant="outlined" label="АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ " sx={textDarkTheme}></TextField>
                        <TextField required variant="outlined" label="ПАРОЛЬ" sx={textDarkTheme}></TextField>

                        <p className={style.registrationQuestion}>Нужна учетная запись? <Link className={style.link} to="/register">Зарегистрироваться</Link></p>

                        <button className={style.button}>Продолжить</button>
                    </>
                }
            </div>

        </div>

    );

}

export default AuthenticationForm;