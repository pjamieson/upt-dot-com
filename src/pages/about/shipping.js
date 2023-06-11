import React from 'react';

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"

import Layout from "../../components/layout"

const ShippingPage = () => {
  return (
    <Layout>
        <div className="container page-container team">
          <h1 className="page-head">Packing and Shipping</h1>
          <MDBCard>
            <MDBCardBody>
              <h2>Overview</h2>

              <p>We accept secure credit card payments through our checkout page, or you may arrange other payment methods by contacting us.</p>

              <p>We pack carefully and well, and ship promptly upon clearance of full payment, typically within one business day.</p>

              <h2>Typewriters</h2>

              <p>We are painfully aware of the damage risks entailed when shipping a typewriter. We strive to ensure that your "new" typewriter arrives at your doorstep in the same condition it leaves ours.</p>

              <p>When packing a typewriter for shipping, we lock the carriage in its centered position, move the margins all the way in to reinforce that position, place padding into the type basket to prevent bouncing keybars, and provide additional padding inside the case to restrict movement. We then wrap padding outside the typewriter's case, and place it in a snug-fitting cardboard box. Finally, we pack that first box—well padded on all six sides—into a larger, double-thick, outer box. For additional peace of mind, we insure all shipments for their full value.</p>

              <p>Packing and UPS or FedEx economy shipping of typewriters is FREE to any street address within the continental United States.</p>

              <p>Expedited shipping and shipping to locations outside the continental United States will be invoiced at our cost as soon as the typewriter is packed, as we need the package dimensions and weight to determine that cost. The invoice will be sent via email, and will include a PayPal link to facilitate payment.</p>

              <h2>Vintage Tools</h2>

              <p>Secure, protective packing and UPS or FedEx economy shipping of vintage typewriter tools is FREE to any street address within the continental United States.</p>

              <p>Expedited shipping and shipping to locations outside the continental United States will be invoiced at our cost as soon as the painting is packed, as we need the package dimensions and weight to determine that cost. The invoice will be sent via email, and will include a PayPal link to facilitate payment.</p>

            </MDBCardBody>
          </MDBCard>
        </div>
    </Layout>
  )
}

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>Packing and Shipping</title>
    <meta
      name="description"
      content="Describes in detail how purchases from UltraportableTypewriters.com are packed and shipped."
    />
  </>
)

export default ShippingPage
