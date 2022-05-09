import React from 'react'
import { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

function NavBar() {
 const [ userSearch, setUserSearch]= useState([])

  return (
      <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Remote Jobs</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
  )
}

export default NavBar