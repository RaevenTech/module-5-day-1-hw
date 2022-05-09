import React from 'react'
import { useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar() {
 const [ userSearch, setUserSearch]= useState([])


 const userSearchHandler = async (job) => {
 try{
    const resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${job}&limit=10`)
    if (resp.ok){
        const data = await resp.json()
        setUserSearch(data.data)
    }
    console.log("Successful search")
 } catch(err){
     console.log("Error", err)
 }
 console.log("Search results",userSearch)
  


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
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={userSearch} onChange = {(e) =>{
          setUserSearch(e.target.value)
          console.log(e.target.value)
      }}/>
      <Button variant="outline-info" onClick={() => {userSearchHandler()}}>Search</Button>
    </Form>
  </Navbar>
  </>
  )
}
}
