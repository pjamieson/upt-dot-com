import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { CartContext } from "../context/cart-context"

import SocialLinks from "../constants/sociallinks"

import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit"

import logo from "../images/icon.png"

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return ( <>

    <MDBNavbar sticky expand="md" dark bgColor="dark">
      <MDBContainer fluid>

        <Link to="/" className="navbar-brand">
          <img src={logo} className="logo" alt="Logo"/>
          <span className="brand-name">UltraportableTypewriters</span>
          <span className="brand-name dot">.</span>
          <span className="brand-name">com</span>
        </Link>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={isCollapsed}>

          <MDBNavbarNav left>
            <MDBNavbarItem>
              <div className="social-links">
                <SocialLinks />
              </div>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
          <div className="menu-items">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle>
                  <div className="nav-menu-item">
                    <p>BRANDS</p>
                  </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/gossen-tippa/">Gossen Tippa</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/typewriters/hermes-typewriter/">Hermes Portables</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/typewriters/remington-typewriter/">Remington Noiseless</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle>
                  <div className="nav-menu-item">
                    <p>ABOUT</p>
                  </div>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/about/shipping/">Packing & Shipping</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/about/returns/">Return Policy</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link className="menu-link" to="/about/contact/">Contact</Link>
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
    </MDBNavbar></>

  )
}

export default Navbar
