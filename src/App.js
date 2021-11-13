import React,{useState} from 'react';
import { Nav, Table, Row, Col, Navbar, NavDropdown } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from '../src/Components/Navbar/NavBar'
import SideBar from '../src/Components/SideBar/SideBar'
import BasicData from '../src/Components/StudentBasicData/BasicData'
import ListaCursos from '../src/Components/CoursesList/ListaCursos'
import styles from './root.module.css'
const useStyles = makeStyles({

  col:{
    padding:0,
    marginRight:0
  },
  container: {
    
    
  }
});

function App() {
  
  const classes = useStyles();
  // const [side,setSide]=useState('');
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open)
  };

  const justdoit = (open)=>{
      setState(open);
  }
  return (
    <div>
      <NavBar justdoit={justdoit}/>
      <Row className={styles.row}>
        <SideBar toggleDrawer={toggleDrawer} hey={state}/>
        <Col className={classes.col}>
          <Container className={classes.container}>
            <BasicData/>    
            <ListaCursos/>
          </Container>
        </Col>
    </Row>
        
      </div>
  );
}

export default App;
