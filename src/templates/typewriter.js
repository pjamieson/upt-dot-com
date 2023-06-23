import React, { useState, useContext, useEffect } from "react"

import { Script, Link, navigate, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";

import { MDBBadge } from "mdb-react-ui-kit"
import { CartContext } from "../context/cart-context"

import ImageSet from "../components/image-set"
import Layout from "../components/layout"
//import Seo from "../components/seo"

import { formatPrice } from "../utils/format"
import { getImageUrl } from "../utils/image-url"
import { getTypewriterAvailable } from "../utils/inventory"

const TypewriterPage = ({
  data: {
    typewriter: {
      id,
      year = {},
      brand = {},
      model = {},
      sn = {},
      subtitle = {},
      header = {},
      keyboard = {},
      typeface = {},
      footprint = {},
      weight = {},
      color = {},
      price,
      images = {},
      condition = {},
      description = {},
    },
  },
}) => {
  const { isInCart, addToCart, removeFromCart } = useContext(CartContext)

  const itemType = "typewriter"
  const title = `${year} ${brand.name} ${model.name} #${sn}`
  const sku = `${year}-${brand.slug}-${model.slug}-${sn}`
  const slug = `${year}-${brand.slug}-${model.slug}-${sn}`
  const cartItem = {
    itemType,
    id,
    sku,
    slug,
    title,
    subtitle,
    imageUrl: getImageUrl(images[0], "small"),
    price
  }

  const [inCart, setInCart] = useState(isInCart(cartItem))
  const [processing, setProcessing] = useState(false)

  // On loading page, confirm typewriter is still available
  const [availNow, setAvailNow] = useState(true) // available by default
  useEffect(() => {
    const fetchData = async () => {
      setProcessing(true)
      setAvailNow(await getTypewriterAvailable(id))
      setProcessing(false)
    }
    fetchData()
  }, [id])

  if (!availNow && inCart) {
    // remove from cart
    removeFromCart(cartItem)
    setInCart(false)
  }

  // Schema.org calculated values
  const seo_brand = `${brand.name} ${model.name}`
  const productCategory = "Office Supplies > Office Equipment > Typewriters" 
  const productDescription = `${title} vintage typewriter. ${subtitle}.`
  const productUrl = `https://ultraportabletypewriters.com/${slug}/`
  const productImageUrl = getImageUrl(images[0], "small")
  const productAvailability = availNow ? "http://schema.org/InStock" : "http://schema.org/OutOfStock"

  return (
    <Layout>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
      <Script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "productID": "${sku}",
            "sku": "${sku}",
            "gtin": "",
            "mpn": "",
            "identifier_exists": "false",
            "category": "${productCategory}",
            "name": "${title}",
            "description": "${productDescription}",
            "url": "${productUrl}",
            "image": [
              "${productImageUrl}"
            ],
            "brand": {
              "@type": "Brand",
              "name": "${seo_brand}"
            },
            "logo": "https://iartx.com/icons/icon-72x72.png",
            "offers": [
              {
                "@type": "Offer",
                "url": "${productUrl}",
                "price": "${price}",
                "priceCurrency": "USD",
                "priceValidUntil": "2023-10-31",
                "itemCondition": "https://schema.org/UsedCondition",
                "availability": "${productAvailability}",
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "0",
                    "currency": "USD"
                  },
                  "shippingDestination": [
                    {
                      "@type": "DefinedRegion",
                      "addressCountry": "US"
                    }
                  ],
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 0,
                      "maxValue": 1,
                      "unitCode": "DAY"
                    },
                    "transitTime": {
                      "@type": "QuantitativeValue",
                      "minValue": 1,
                      "maxValue": 10,
                      "unitCode": "DAY"
                    }
                  }
                },
                "hasMerchantReturnPolicy": {
                  "@type": "MerchantReturnPolicy",
                  "applicableCountry": "US",
                  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                  "merchantReturnDays": 30,
                  "returnMethod": "https://schema.org/ReturnByMail",
                  "returnFees": "https://schema.org/FreeReturn"
                }
              }
            ]
          }
        `}
      </Script>

      <div className="page-container">
        <article className="item-details">
          <h1>{title}</h1>
          <div className="details-container">

            <div className="item-gallery">
              <ImageSet title={title} images={images} />
              <div className="back-btn">
                <Link to={`/`} className="btn-floating btn-action btn-primary">
                  <i className="fas fa-chevron-left"></i>
                </Link>
              </div>
            </div> {/* item-gallery */}

            <div className="item-description">
              <div className="details">
                { (subtitle && subtitle.length) &&
                  <h2>{subtitle}</h2>
                }
                { (header && header.length) &&
                  <h3>{header}</h3>
                }
                { (sn && sn.length) &&
                  <div>
                    <span><p><b>Serial No.:</b> {sn} (The {year} year of manufacture determination is based on data from the {brand.name} Typewriter Serial Numbers page at TypewriterDatabase[dot]com.)</p></span>
                  </div>
                }
                { (keyboard && keyboard.length) &&
                  <div>
                    <span><p><b>Keyboard:</b> {keyboard}</p></span>
                  </div>
                }
                { (typeface && typeface.length) &&
                  <div>
                    <span><p><b>Typeface:</b> {typeface}</p></span>
                  </div>
                }
                { (footprint && footprint.length) &&
                  <div>
                    <span><p><b>Footprint:</b> {footprint}</p></span>
                  </div>
                }
                { (weight && weight.length) &&
                  <div>
                    <span><p><b>Weight:</b> {weight}</p></span>
                  </div>
                }
                { (color && color.length) &&
                  <div>
                    <span><p><b>Color:</b> {color}</p></span>
                  </div>
                }
                { condition.data.condition &&
                  <div>
                    <ReactMarkdown children={condition.data.condition} />
                  </div>
                }
                { description.data.description &&
                  <ReactMarkdown children={description.data.description} />
                }
                <p>------</p>
                <p><em>Please note that we are painfully aware of the damage risks entailed when shipping a typewriter. We strive to ensure that your "new" typewriter arrives at your doorstep in the same condition it leaves ours.</em></p>
                <p><b>Packing and FedEx or UPS economy shipping of this typewriter is FREE to any street address within the continental United States.</b> Expedited shipping and shipping to locations outside the continental United States will be invoiced at our cost.</p>
                { (processing) &&
                  <h3>Confirming availability...</h3>
                }
                <div className="inventory-msg">
                  { (!availNow) &&
                    <>
                      <br />
                      <h3>Sorry, this typewriter is no longer available.</h3>
                    </>
                  }
                </div>
              </div> {/* details */}

              { (availNow) &&
                <div className="price-action">
                  <br />
                  <h3 className="price">{formatPrice(price)}</h3>
                  <div>
                    { (price > 200 && availNow && !inCart) &&
                      <button type="button" className="btn btn-add-to-cart btn-primary btn-rounded" onClick={() => {
                        addToCart(cartItem)
                        setInCart(true)
                        //window.gtag("event", "conversion", {
                        //  send_to: [`${process.env.GATSBY_GOOGLE_ADS_ID}/Mc6uCNTLgdEDEMvG1c8D`]
                        //})
                      }}>
                        <i className="fas fa-cart-plus"></i>Add to Cart
                      </button>
                    }
                    { (inCart && availNow) &&
                      <MDBBadge color="secondary">Added to Cart</MDBBadge>
                    }
                  </div>
                  <div className="btn-inquire">
                    <button type="button" className="btn btn-inquire btn-primary btn-rounded" onClick={() => {
                      navigate('/inquire/', {
                        state: {
                          title,
                          sku,
                          image_src: images[0].formats.small.url
                        }
                      })
                    }}>Inquire</button>
                  </div>
                </div>
              }

            </div> {/* item-description */}
          </div> {/* details-container */}
        </article> {/* item-details */}
      </div> {/* page-container */}
    </Layout>
  )
}

export const query = graphql`
query GetSingleTypewriter($id: String) {
  typewriter: strapiTypewriter(id: {eq: $id}) {
    id: strapi_id
    year
    brand {
      name
      slug
    }
    model {
      name
      slug
    }
    sn
    subtitle
    header
    keyboard
    typeface
    footprint
    weight
    color
    price
    condition {
      data {
        condition
      }
    }
    description {
      data {
        description
      }
    }
    images {
      formats {
        large {
          url
        }
        medium {
          url
        }
        small {
          url
        }
        thumbnail {
          url
        }
      }
      height
      width
      url
    }
  }
}`

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <link rel="icon" type="image/png" href="../images/icon.png"></link>
    <title>{data.typewriter.year} {data.typewriter.brand.name} {data.typewriter.model.name} Typewriter #{data.typewriter.sn}</title>
    <meta
      name="description"
      content={`Images of and details about the ${data.typewriter.year} ${data.typewriter.brand.name} ${data.typewriter.model.name} vintage typewriter serial number ${data.typewriter.sn}`}
    />
  </>
)

export default TypewriterPage
