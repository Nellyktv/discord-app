import React from "react";
import style from './authorizationForm.module.css';



const  AutorizationForm = () => {

return(
    <>
    <div className={style.wrapperForm}>
    <div className={style.container_wrapper}>
        <p className={style.titleForm}>С возвращением!</p>
        <p >Мы так рады видеть вас снова!</p>

        <label for='yourNameRegistration' className={style.textForm}> АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ ИЛИ НОМЕР ТЕЛЕФОНА<span className={style.red_star}>*</span></label>
        <input type="text" name='yourNameRegistration' className={style.inputs}></input>

        <label for='yourPassRegistration' className={style.textForm} > ПАРОЛЬ <span className={style.red_star}>*</span></label>
        <input type="text" name='yourPassRegistration' className={style.inputs} ></input>
        <a href="#" className={style.link}>Забыли пароль?</a>
        <button className={style.button}>Вход</button>

       <p>Нужна учетеная запись?</p> 
       <a href="#" className={style.link}>Зарегистрироваться</a>

        

    </div>
    </div>

</>

);

}

export default AutorizationForm;