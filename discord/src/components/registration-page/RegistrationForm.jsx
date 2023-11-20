import React from "react";
import style from "./registrationForm.module.css";



const RegistrationForm = () => {

    return (
        <>
            <div className={style.page}>
                <div className={style.wrapperForm}>
                    <div className={style.container_wrapper}>
                        <p className={style.titleForm}>Создать учетную запись</p>

                        <label for='yourEmail' className={style.textForm}> E-MAIL <span className={style.red_star}>*</span></label>
                        <input type="email" name='yourEmail' className={style.inputs}></input>

                        <label for='yourNameForAll' className={style.textForm}> ОТОБРАЖАЕМОЕ ИМЯ <span className={style.red_star}>*</span></label>
                        <input type="text" name='yourNameForAll' className={style.inputs}></input>

                        <label for='yourNameRegistration' className={style.textForm}> ИМЯ ПОЛЬЗОВАТЕЛЯ <span className={style.red_star}>*</span></label>
                        <input type="text" name='yourNameRegistration' className={style.inputs}></input>

                        <label for='yourPassRegistration' className={style.textForm} > ПАРОЛЬ <span className={style.red_star}>*</span></label>
                        <input type="password" name='yourPassRegistration' className={style.inputs} ></input>

                        <label for='yourBirthdayDate' className={style.textForm}> ДАТА РОЖДЕНИЯ <span className={style.red_star}>*</span></label>
                        <input type="date" name='yourBirthdayDate' className={style.inputs}  ></input>
                        <p>
                            <input type="checkbox" name="check" className={style.checkbox} />
                            <label for='check' className={style.inputsCheck}>(Необязательно) Я не против получать электронные письма с новостями Discord, советами и специальными предложениями. От рассылки можно отписаться в любое время.</label>
                        </p>

                        <button className={style.button}>Продолжить</button>

                        <a href="#" className={style.link}>Уже зарегистрированы?</a>

                    </div>
                </div>
            </div>
        </>

    );

}

export default RegistrationForm;