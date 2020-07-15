import React, { useRef } from "react"
import { Navbar, Nav, NavItem, NavbarBrand, NavLink } from "reactstrap"
import { useHistory } from "react-router-dom"

const NavBar = () => {
  const history = useHistory()

  const inputUser = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/users/${inputUser.current.value}`);
  }

  return (
    <Navbar id = "topNavBar">
      <NavbarBrand onClick={() => {history.push("/")}}>Nextagram</NavbarBrand>
      <Nav  navbar>
        <NavItem>
          <NavLink onClick={() => {history.push("/users/3")}}>Users</NavLink>
        </NavItem>
         <NavItem>
          <NavLink onClick={() => {history.push("/users/2")}}>Login</NavLink>
        </NavItem><NavItem>
          <NavLink onClick={() => {history.push("/users/1")}}>Sign Up</NavLink>
        </NavItem>
        <>
          <form onSubmit={e => handleSubmit(e)}>
            <label>
              User ID:
              <input type="text" ref={inputUser} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </>
      </Nav>
    </Navbar>
  )
}

export default NavBar