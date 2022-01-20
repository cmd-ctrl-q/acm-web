import React from 'react';
import acmlogo from '../../Media/Images/Icons/association-for-computing-machinery-logo.png';
import { Nav, Navbar} from "react-bootstrap";
import {
  useHistory
} from "react-router-dom";
import { FaDiscord } from 'react-icons/fa';
import './NavigationBar.css';

const NavigationBar = () => {
  let history = useHistory();

  return (
    <div className="navacmbg">
      < Navbar className="navacm" collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" >
        <Navbar.Brand className="acm" onClick={()=> history.push("/")}><img style={{ height: '50px', width: '50px', marginRight: '10px' }} src={acmlogo} alt='acm' />Association for Computing Machinery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="acm" onClick={()=> history.push("/officers")}>Officers</Nav.Link>
            <Nav.Link className="acm" onClick={()=> history.push("/resources")}>Resources</Nav.Link>
            <Nav.Link className="acm" onClick={()=> history.push("/calendar")}>Calendar</Nav.Link>
            <Nav.Link className="acm" onClick={()=>history.push("/membership")}>Membership</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link className="navDisc" href="https://discord.gg/g6bQXFMjs3">  <FaDiscord size={25}/>  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div>
  );
}

export default NavigationBar;