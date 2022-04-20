import logo from './logo.svg';
import './App.css';
import {Header} from './Components/header.js'
import {Footer} from './Components/footer.js'
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom'
import {Home} from './Pages/Home.js'
import {Login} from './Pages/Login.js'
import {Register} from './Pages/Register.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>

        <BrowserRouter>
            <Header/>

            <Container fluid>
            <Row>
        <switch>
            <Route exact path="/" exact component={() => <Home />} />
            <Route exact path="/Login" exact component={() => <Login />} />
            <Route exact path="/Register" exact component={() => <Register />} />
        </switch>
            </Row>
            </Container>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
