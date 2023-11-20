import React, { useState } from "react";
import style from "./authenticationForm.module.css";
import { TextField } from "@mui/material";


const AuthenticationForm = () => {
    const [auth, setAuth] = useState(true);

    function handleClick() {
        setAuth(!auth);
    }

    return (

        <div className={style.page}>

            <div className={style.container_wrapper}>
                {auth ?
                    <>
                        <p className={style.titleForm}>Создать учетную запись</p>
                        <TextField required variant="outlined" label="E-MAIL" labelColor='white' ></TextField>
                        <TextField required variant="outlined" label="ИМЯ ПОЛЬЗОВАТЕЛЯ" className={style.inputs}></TextField>
                        <TextField required variant="outlined" label="ПАРОЛЬ" className={style.inputs}></TextField>
                        <button className={style.button}>Продолжить</button>
                        <a href="#" className={style.link} onClick={handleClick}>Уже зарегистрированы?</a>
                    </>
                    :
                    <>
                        <p className={style.titleForm}>С возвращением!</p>
                        <p className={style.textWelcome}>Мы так рады видеть вас снова!</p>

                        <TextField required variant="outlined" label="АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ " labelColor='white' ></TextField>
                        <TextField required variant="outlined" label="ПАРОЛЬ" className={style.inputs}></TextField>

                        <p className={style.registrationQuestion}>Нужна учетная запись? <a href="#" className={style.link} onClick={handleClick}>Зарегистрироваться</a></p>
                        <button className={style.button}>Продолжить</button>
                    </>
                }
            </div>

        </div>

    );

}

export default AuthenticationForm;