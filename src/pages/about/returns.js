import React from 'react';

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"

import Layout from "../../components/layout"

const ReturnsPage = () => {
  return (
    <Layout>
        <div className="container page-container team">
          <h1 className="page-head">Returns Policy</h1>
          <MDBCard>
            <MDBCardBody>
              <h2>It's simple...</h2>

              <p>We pack carefully and well, and ship promptly upon clearance of full payment, typically within one business day.</p>

              <p><b>We accept returns within 30 days for any reason.</b> If returning an item, please pack it as we did, using the same materials we used to pack it for shipment to you.</p>

              <p>If any item you purchase from us is not as described, we will fully refund the amount paid, including any sales tax and shipping charges. Otherwise, we will refund the amount paid, less our incurred credit card processing and shipping costs.</p>

            </MDBCardBody>
          </MDBCard>
        </div>
    </Layout>
  )
}

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Returns Policy</title>
    <meta
      name="description"
      content="Describes the UltraportableTypewriters.com 30-day, any reason, returns policy."
    />
  </>
)

export default ReturnsPage
