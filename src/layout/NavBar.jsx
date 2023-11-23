import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch } from 'react-router-dom';
import logo from '../asset/logo.jpeg'
import eye from '../asset/eye.jpeg'

function NavScrollExample() {
  const isAbout = useMatch('/AllUser')
  const isNew = useMatch('/NewUser')
  return (
    <>
    <Navbar expand="lg" className="container mt-4">
      <Container fluid>
        <h2><Link to='/' className='text-decoration-non'><img src={logo} alt={logo} className='bounce'/></Link></h2>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

          </Nav>
          <div className="d-flex gap-4 lh-base align-items-center">
            {!isNew && 'AllUser'&&(
              <Link  to= {'/NewUser'} className='text-decoration-none text-dark'><h4>New User</h4></Link>
            )}
            {!isAbout && '/AllUser' &&(
              <Link to= {'/AllUser'} className='text-decoration-none text-dark'><h4>All User</h4></Link>
            )}
            <Link className='text-decoration-none text-dark d-none d-lg-block'><img src={eye} alt={eye} /></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    </>
  );
}

export default NavScrollExample;

