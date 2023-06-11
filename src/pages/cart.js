import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Link, navigate } from "gatsby"
import { CartContext } from "../context/cart-context"
import Layout from "../components/layout"

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdb-react-ui-kit";

import { getTypewriterAvailable } from "../utils/inventory"
import { cartSubtotal } from "../utils/cart"
import { formatPrice } from "../utils/format"

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  const [, updateState] = useState()

  const forceUpdate = useCallback(() => updateState({}), [])

  // On loading page, confirm cart items still available
  const [ cartEmpty, setCartEmpty ] = useState(false)
  const [ cartChanged, setCartChanged ] = useState(false)
  useEffect(() => {
    if (cart && cart.length > 0) {
      Promise.all(cart.map(async item => {
        if (item.itemType === "typewriter") {
          const isAvailable = await getTypewriterAvailable(item.id)
          if (!isAvailable) {
            setCartChanged(true)
            removeFromCart(item)
          }

          return isAvailable // forces block to complete before continuing
        }
      }))
    } else {
      setCartEmpty(true)
    }
  }, [cart, removeFromCart])

  if (cartChanged) {
    navigate('/cart-changed/')
  }

  return (
    <Layout>
      <div className="container page-container">
        <MDBContainer className="cart">
          <h1>Cart</h1>
          <MDBRow center>
            <MDBCard className='w-100'>
              <MDBCardBody>
                <div className="table-responsive">
                  {(cart && cart.length > 0) &&
                  <MDBTable className="product-table">
                    <MDBTableHead>
                      <tr>
                        <th scope="col"> </th>
                        <th scope="col" className="text-left">Item</th>
                        <th scope="col"className="text-right">Amount</th>
                        <th scope="col"> </th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {cart.map(item => {
                        return <tr key={item.sku}>
                          <td className="img-cell">
                            <div className="img-hover-zoom">
                              {(item.itemType === "typewriter") &&
                                <a href={`/${item.slug}/`}>
                                  <img className="img-fluid rounded" src={item.imageUrl} alt={item.title} />
                                </a>
                              }
                            </div>
                          </td>
                          <td className="item-cell">
                            <div className="cart-item">
                              <h4 className="mt-3 mb-0" key={item.sku}>
                                {item.title}
                              </h4>
                              <p className='text-muted'>{item.subtitle}</p>
                            </div>
                          </td>
                          <td className="item-price text-right">
                            {formatPrice(item.price)}
                          </td>
                          <td className="remove-cell">
                            <MDBBtn size="md">
                              <MDBIcon icon="trash-alt" size="lg" aria-hidden="true"
                                onClick={() => {
                                  removeFromCart(item)
                                  forceUpdate()
                                }}>
                              </MDBIcon>
                            </MDBBtn>
                          </td>
                        </tr>
                      })}
                      <tr>
                        <td> </td>
                        <td className="subtotal-label">Subtotal:</td>
                        <td className="subtotal item-price">
                          {formatPrice(cartSubtotal(cart))}
                        </td>
                        <td> </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                  }
                  {(cartEmpty) && <h3>Your cart is empty.</h3>}
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="open-checkout-btn">
              {(cart && cart.length > 0) &&
                <Link to="/checkout/" className="btn btn-primary btn-rounded">
                  Checkout<i className="fas fa-chevron-right"></i>
                </Link>
              }
            </div>

          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  )
}

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Cart</title>
    <meta name="robots" content="noindex" />
  </>
)

export default CartPage;
