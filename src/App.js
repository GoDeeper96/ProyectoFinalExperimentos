import React ,{useState}from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import { Nav, Table, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 1200
  },
  something:{
    maxWidth: 200,
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Nombre Marca</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar>   
      <Row>
      <Card className={classes.something}>
              <CardContent>
        <Col xs={1}>
            <div>
            <nav class="main-nav">
              <ul class="main-nav-ul">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">
                    Products
                    <span class="sub-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Item 1</a>
                    </li>
                    <li>
                      <a href="#">Item 2</a>
                    </li>
                    <li>
                      <a href="#">Item 3</a>
                    </li>
                    <li>
                      <a href="#">Item 4</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">dropdown</a>
                  <ul>
                    <li>
                      <a href="#">Item 1</a>
                    </li>
                    <li>
                      <a href="#">Item 2</a>
                    </li>
                    <li>
                      <a href="#">Item 3</a>
                    </li>
                    <li>
                      <a href="#">Item 4</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul />
            </nav>
          </div>
        </Col>
        </CardContent>
          </Card>
        <Col>

          <Container className="contain">
          <Card className={classes.root}>
              <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Datos Basicos del alumno
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ejemplo Ejemplo Ejemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo EjemploEjemplo Ejemplo
            </Typography>
          </CardContent>
          </Card>
          <Card className={classes.root}>
              <CardContent>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                    <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                    </tr>
                </tbody>
                </Table>
                </CardContent>
          </Card>
            </Container>
        </Col>
    </Row>
        
      </div>
  );
}

export default App;
