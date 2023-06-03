import React, { useState, useContext, useEffect } from "react"

import { Script, Link, navigate, graphql } from "gatsby"
import ReactMarkdown from "react-markdown";

import { MDBBadge } from "mdb-react-ui-kit"
import { CartContext } from "../context/cart-context"

import ImageSet from "../components/image-set"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { formatPrice } from "../utils/format"
import { getImageUrl } from "../utils/image-url"
//import { getPaintingQtyAvailable } from "../utils/inventory"

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
  //const { isInCart, addToCart } = useContext(CartContext)

  const itemType = "typewriter"
  const title = `${year} ${brand.name} ${model.name} #${sn}`
  const sku = `${brand.name}-${model.name}-${sn}`
  const slug = `${brand.slug}/${model.slug}/${sn}/`
  const creator = `${brand.name}`
  const subt = subtitle ? subtitle : `A Vintage Typewriter`
  const qty = 1 //initialize with 1 of item
  const qtyAvail = 1
  const cartItem = {
    itemType,
    id,
    sku,
    slug,
    creator,
    title,
    subtitle: subt,
    imageUrl: getImageUrl(images[0], "small"),
    qty,
    qtyAvail,
    price
  }

  /*
  const [inCart, setInCart] = useState(isInCart(cartItem))
  const [processing, setProcessing] = useState(false)

  // On loading page, confirm painting is still available
  const [qtyAvailNow, setQtyAvailNow] = useState(1) // one available by default
  useEffect(() => {
    const fetchData = async () => {
      setProcessing(true)
      setQtyAvailNow(await getPaintingQtyAvailable(id))
      setProcessing(false)
    }
    fetchData()
  }, [id])

  if (qtyAvailNow === 0 && inCart) {
    // remove from cart
    addToCart(cartItem, -1)
    setInCart(false)
  }

  const prof = subgenres[0].name === "Haitian Art" ? "Haitian artist" : "artist"

  // Schema.org calculated values
  const productTitle = (form === "Typewriter" ? title : `${creatorname} - ${title}`)
  const seo_description = (form === "Typewriter" ? `Images and details about the ${title} typewriter from The Jamieson Collection` : `Images of and details about the original ${form} “${title}” by the ${prof} ${creatorname}`)

  const productCategory = (form === "Typewriter" ? "Office Supplies > Office Equipment > Typewriters" : "Home & Garden > Decor > Artwork > Posters, Prints, & Visual Artwork")

  const productDescription = (subtitle ? subtitle : `An original ${form} by ${creatorname}`)
  const productUrl = `https://iartx.com/gallery/${slug}/`
  const productImageUrl = getImageUrl(images[0], "small")
  const productAvailability = qtyAvailNow > 0 ? "http://schema.org/InStock" : "http://schema.org/OutOfStock"
*/
  return (
    <Layout>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
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
                { condition.data.condition &&
                  <div>
                    <span><p>
                      <b>Condition:</b> <ReactMarkdown children={condition.data.condition} />
                    </p></span>
                  </div>
                }
                { description.data.description &&
                  <span><p>
                    <b>Details:</b> <ReactMarkdown children={description.data.description} />
                  </p></span>
                }
                <p>------</p>
                <p><em>Please note that we are painfully aware of the damage risks entailed when shipping a typewriter. web strive to ensure that your 'new' typewriter arrives at your doorstep in the same condition it leaves ours.</em></p>
                <p><b>Packing and FedEx or UPS economy shipping of this typewriter is FREE to any street address within the continental United States.</b> Expedited shipping and shipping to locations outside the continental United States will be invoiced at our cost.</p>

              </div> {/* details */}
              
              <div className="price-action">
                <h3 className="price">{formatPrice(price)}</h3>
             </div> {/* price-action */}
            </div> {/* item-description */}
          </div> {/* details-container */}
        </article> {/* item-details */}
      </div> {/* page-container */}
      */
    </Layout>
  )
}

export const query = graphql`
query GetSingleTypewriter($id: String) {
  typewriter: strapiTypewriter(id: {eq: $id}) {
    id
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
    <title>{data.typewriter.year} {data.typewriter.brand.name} {data.typewriter.model.name} Typewriter #{data.typewriter.sn}</title>
    <meta name="description" content="Bla bla typewriter ..." />
  </>
)

export default TypewriterPage
