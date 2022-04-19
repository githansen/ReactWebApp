import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Col'
import React from 'react'
import './general.css'
import $ from 'jquery';
import axios from 'axios'

function validateemail(email){
    let regexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(!regexp.test(email)){
        $("#emailerror").html("Invalid email")
        return false;
    }
    else{
        $("#emailerror").html("")
        return true;
    }

}
function validateuser(username){
let regexp = new RegExp("[a-zA-Z\\-]")
    if(!regexp.test(username)){
        $("#usernameerror").html("Numbers and letters only")
        return false;
    }
    else{
        $("#usernameerror").html("")
        return true;
    }
}
function validatepassword(password){
    let regexp = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}");
    if(!regexp.test(password)){
        $("#passworderror").html("8 chars, 1 uppercase, 1 lowercase, 1 number")
        return false;
    }
    else{
        $("#passworderror").html("")
        return true;
    }
}
function registrer(){
    let password = $("#password").val()
    let username = $("#username").val()
    let email = $("#email").val()
    validateemail(email)
    validateuser(username)
    validatepassword(password)
    if(!(validateemail(email) && validateuser(username) && validatepassword(password))) return;

    axios.post("http://localhost:8080/Register", {
        password: password,
        username: username,
        email: email
    })
        .then(function (response){
            if(response.data === true){
                alert("Registration successful, taking you to login-page")
                window.location.href = '/login'
            }
            else{
                alert("Username or email already exists, please try again")
            }
        });
}



export const Register=()=>{
    return(
        <div className={'general'}>
            <Row>
                <Col sm={5}/>
                <Col sm={7}>
                    <h1>
                        Registrer bruker
                    </h1>
                </Col>
            </Row>
            <Row className={'tabell'}>
                <Col sm={6}>
            <table>
                <tbody>
                <tr>
                    <td>
                <label htmlFor={'username'}>Username</label>
                    </td>
                    </tr>
                <tr>
                    <td>
                <input type={'text'} id={'username'}></input>
                    </td>
                    <td>
                        <div id={'usernameerror'}></div>
                    </td>
                </tr>
                <tr>
                    <td>
                <label htmlFor={'password'}>Password</label>
                    </td>
                    </tr>
                <tr>
                    <td>
                <input type={'text'} id={'password'}></input>
                    </td>
                    <td>
                        <div id={'passworderror'}></div>
                    </td>
                    </tr>
                <tr>
                    <td>
                <label htmlFor={'email'}>Email</label>
                    </td>
                </tr>
                <tr>
                    <td>
                <input type={'text'} id={'email'}></input>
                    </td>
                    <td>
                        <div id={'emailerror'}></div>
                    </td>
                    </tr>
                <tr>
                    <td>
                    <button onClick={registrer} className={'btn btn-primary'}>Registrer</button>
                    </td>
                    </tr></tbody>
            </table>
                </Col>
            </Row>
        </div>

    )
}