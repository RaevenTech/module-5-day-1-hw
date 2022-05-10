import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar() {
 

  return (
      <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Remote Jobs</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
      <Button variant="outline-info" onClick={() => {}}>Search</Button>
    </Form>
  </Navbar>
  </>
  )
}

