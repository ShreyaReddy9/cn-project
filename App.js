import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Import styles.css
import './login.css'; // Import login.css

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log('Submitted:', { username, password });
    };

    return ( <
        div className = "d-flex flex-column vh-100 justify-content-between" > { /* Utilize Bootstrap classes for flex layout and vertical height */ } <
        header className = "header" >
        <
        div className = "logo" >
        <
        a href = "https://www.sdsu.edu/" >
        <
        img src = "https://ou-resources.sdsu.edu/images/_sdsu/logo-2022/logo.png"
        alt = "San Diego State University"
        height = "40"
        width = "176" / >
        <
        /a> < /
        div > <
        /header> <
        div className = "container-fluid d-flex flex-column align-items-center justify-content-center" >
        <
        div className = "login-container" >
        <
        div className = "card" >
        <
        div className = "card-body" >
        <
        form onSubmit = { handleSubmit } >
        <
        p className = "card-title" > Office Hours Scheduler Login < /p> <
        div className = "form-group" >
        <
        label htmlFor = "username" > Username < /label> <
        input type = "text"
        className = "form-control"
        id = "username"
        value = { username }
        onChange = { handleUsernameChange }
        /> < /
        div > <
        div className = "form-group" >
        <
        label htmlFor = "passwordField" > Password < /label> <
        input type = "password"
        className = "form-control"
        id = "passwordField"
        value = { password }
        onChange = { handlePasswordChange }
        /> < /
        div > <
        button type = "submit"
        className = "btn btn-primary" > Submit < /button> < /
        form > <
        /div> < /
        div > <
        /div> < /
        div > <
        footer className = "footer" >
        <
        div className = "footer__info-block" >
        <
        div className = "copyryght-block" >
        <
        span className = "copyright" > ©2024 San Diego State University < /span> <
        span > All Rights Reserved < /span> < /
        div > <
        /div> < /
        footer > <
        /div>
    );
}

export default LoginPage;