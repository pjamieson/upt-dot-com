import React from 'react';import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"

import Layout from "../components/layout"

const SuccessPage = ({ location }) => {
  const firstname = (location && location.state && location.state.firstname) ? location.state.firstname : ''

  return (
    <Layout>
        <div className="container page-container success">
          <h1 className="page-head">Order Processed</h1>
          <MDBCard>
            <MDBCardBody>
              <h2 className='mt-1 text-center'>
                {firstname.length > 0 &&
                  `Thanks, ${firstname}!`
                }
                {!firstname.length >0 &&
                  `Thanks!`
                }
              </h2>
              <p className="mb-4 lead">Order Confirmation email sent.</p>
            </MDBCardBody>
          </MDBCard>
        </div>
    </Layout>
  )
}

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Order Precessed</title>
    <meta name="robots" content="noindex" />
  </>
)

export default SuccessPage;
