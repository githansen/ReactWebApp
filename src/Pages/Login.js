import React from 'react'
import './general.css'
import axios from 'axios'
import $ from 'jquery'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Col'
import {useState} from "react";

function login(){
    axios.post("http://localhost:8080/Login", {
        password: $("#password").val(),
        username: $("#username").val(),
    })
        .then((response) =>{
            if(response.data===true){
                alert("SUccess")
                document.getElementById("tabell").style.display='block'
            }
            else{
                alert("not success")
            }
        })
}


export const Login =()=>{
    return(
        <div  className={'general'}>
            <Container>
                <Row>
                    <Col sm={5}/>
                    <Col sm={7}>
                        <h2>Logg inn</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}/>
                    <Col sm={4}>

                    </Col>
                    <Col sm={4}/>
                </Row>
                <Row>


            <Col sm={6} className={'tabell2'}>
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
                    </tr>
                <tr><td><button onClick={login} className={'btn btn-danger'}>Logg inn</button></td></tr>
                </tbody>
            </table>

            </Col>
                </Row>
                </Container>
        </div>
    )
}