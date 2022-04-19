import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Header =()=>{
    return(

        <header className={"navbar navbar-default"}>
            <Row>
                <Col sm={2}></Col>
                <Col sm={2}>
            <a href='/'> Hjem </a>
                </Col>
                <Col sm={4}>
            <a href='/Login'>Innlogging</a>
                </Col>
                <Col sm={4}>
            <a href='/Register'>Registrer</a>
                </Col>
            </Row>
        </header>


    );
}