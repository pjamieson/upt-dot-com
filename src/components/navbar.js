import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { CartContext } from "../context/cart-context"

import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit"

import logo from "../images/icon.png"

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (

    <MDBNavbar sticky expand="md" dark bgColor="dark">
      <MDBContainer fluid>

        <MDBNavbarBrand href='/'>
          <img src={logo} className="logo" alt="Logo"/>
          <span className="brand-name">UltraportableTypewriters</span>
          <span className="brand-name dot">.</span>
          <span className="brand-name">com</span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type='button'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={isCollapsed}>

          <MDBNavbarNav>
            <div className="menu-items">
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle>
                    <div className="nav-menu-item">
                      <p>BRAND STORIES</p>
                    </div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link className="menu-link" to="/gossen-tippa/">Gossen Tippa</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link className="menu-link" to="/hermes-portables/">Hermes Portables</Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>

        </MDBCollapse>

        <Link className="cart-link" to="/cart/">
          <MDBIcon className="cart-icon success-text" icon="shopping-cart" size="2x" />
          { (cart && cart.length > 0) &&
            <p className="cart-count">{cart.length}</p>
          }
        </Link>

      </MDBContainer>
    </MDBNavbar>
  )
}

export default Navbar
