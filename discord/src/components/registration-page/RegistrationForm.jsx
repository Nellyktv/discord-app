import React from "react";
import style from "./registrationForm.module.css";



const RegistrationForm = () => {

    return (
        <>
        <div className={style.page}>
            <div className={style.wrapperForm}>
            <div className={style.container_wrapper}>
                <p className={style.titleForm}>Создать учетную запись</p>

                <label for='yourNameRegistration' className={style.textForm}> ИМЯ ПОЛЬЗОВАТЕЛЯ <span className={style.red_star}>*</span></label>
                <input type="text" name='yourNameRegistration' className={style.inputs}></input>

                <label for='yourPassRegistration' className={style.textForm} > ПАРОЛЬ <span className={style.red_star}>*</span></label>
                <input type="text" name='yourPassRegistration' className={style.inputs} ></input>

                <button className={style.button}>Продолжить</button>

                <a href="#" className={style.link}>Уже зарегестрированы?</a>

            </div>
            </div>
            </div>
        </>

    );

}

export default RegistrationForm;