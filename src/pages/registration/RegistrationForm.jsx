import React from "react";
import style from "./registrationForm.module.css";
import { TextField } from "@mui/material";


const RegistrationForm = () => {

    return (
        <div className={style.page}>

            <div className={style.container_wrapper}>
                <p className={style.titleForm}>Создать учетную запись</p>

                <TextField required variant="outlined" label="E-MAIL" labelColor='white' ></TextField>
                <TextField required variant="outlined" label="ИМЯ ПОЛЬЗОВАТЕЛЯ" className={style.inputs}></TextField>
                <TextField required variant="outlined" label="ПАРОЛЬ" className={style.inputs}></TextField>

                <button className={style.button}>Продолжить</button>

                <a href="#" className={style.link}>Уже зарегистрированы?</a>


            </div>
        </div>

    );

}

export default RegistrationForm;