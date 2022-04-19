import React from 'react'
import './general.css'
import axios from "axios";
import $ from 'jquery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function sitat(){
axios.get("http://localhost:8080/Loggedin")
    .then((response)=>{
        if(response.data === true){
           axios.get("https://type.fit/api/quotes")
               .then((data) =>{
                   let tall = Math.floor(Math.random()*1644);
                   $("#ut").html(data.data[tall].text + " " + "-" + data.data[tall].author)
               })
        }
        else{
            alert("Vennligst logg inn")
        }
    })
}
function kattefakta(){
    axios.get("http://localhost:8080/Loggedin")
        .then((response)=>{
            if(response.data === true){
                axios.get("https://cat-fact.herokuapp.com/facts")
                    .then((data) =>{
                        let tall = Math.floor(Math.random()*5);
                        $("#ut").html(data.data[tall].text)
                    })
            }
            else{
                alert("Vennligst logg inn")
            }
        })
}
function activity(){
    axios.get("http://localhost:8080/Loggedin")
        .then((response)=>{
            if(response.data === true){
                axios.get("https://www.boredapi.com/api/activity")
                    .then((data) =>{
                        $("#aktivitet").html(data.data.activity)
                    })
            }
            else{
                alert("Vennligst logg inn")
            }
        })
}
function hundebilde(){
    axios.get("http://localhost:8080/Loggedin")
        .then((response)=>{
            if(response.data === true){
                axios.get("https://dog.ceo/api/breeds/image/random")
                    .then((data) =>{
                        let htmlkode="<img src='" + data.data.message + "' </img>"
                        $("#aktivitet").html(htmlkode)
                    })
            }
            else{
                alert("Vennligst logg inn")
            }
        })
}
export const Home=()=>{
    return(

            <Container fluid>

                <Row>
                    <Col sm={2}>
            <button onClick={sitat} className={'btn btn-primary'}id={'knapp'}>Sitat</button>
                    </Col>
                    <Col sm = {6}>
            <div id={'ut'} className={'fact'}></div>
                    </Col>
                    <Col sm={4}>
                        <button className={'btn btn-primary'} id={'knapp'} onClick={kattefakta}> Fakta om katter</button>
                    </Col>

            </Row>
                <Row>
                    <Col sm={2}>
                        <button className={'btn btn-primary'} id={'knapp'} onClick={activity}>Generer forslag til gjøremål</button>
                    </Col>
                    <Col sm={6}>
                        <div id={'aktivitet'} className={'fact'}></div>
                    </Col>
                    <Col sm={4}>
                        <button className={'btn btn-primary'} id={'knapp'} onClick={hundebilde}>Vis bilde av en hund</button>
                    </Col>

                </Row>

            </Container>

    )
}