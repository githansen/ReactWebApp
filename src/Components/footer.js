import REACT from 'react'
import './footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Footer =()=>
{
    return(
        <footer className="page-footer font-small blue pt-4">
            <div>
                <Row>
                    <Col sm={6}>
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                </Col>
                    <Col sm={3}>
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>

        </footer>

    );
}