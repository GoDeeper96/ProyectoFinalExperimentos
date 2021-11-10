import React,{ useState} from 'react';
import {  Col } from 'react-bootstrap';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import styles from './Sidebar.module.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";
const Sidebar=props=>{
    //   const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    
    //     props.setState({ ...props.state, [anchor]: open });
    //   };
    
      const list = () => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          <List>
            {['Listas de cursos', 'Matricula'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Configuración','Otros'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
      return (
        <div>
            <React.Fragment key={'left'}>            
              <Drawer
                anchor={'left'}
                open={props.hey}
                onClose={props.toggleDrawer(false)}
              >
                {list()}
              </Drawer>
            </React.Fragment>
        </div>
      );
}
export default Sidebar;