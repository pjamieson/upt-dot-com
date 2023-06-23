import * as React from "react"
import { Script, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import { Seo } from "../components/seo"
import Layout from "../components/layout"
import CardImageCaptionLink from "../components/card-image-caption-link"

const IndexPage = ({data}) => {
  const {
    allStrapiTypewriter: { nodes: typewriters },
  } = data
  //console.log("index.js typewriters", typewriters)
  return (
    <Layout>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js" />
      <div className="container site-container">
        <StaticImage
          alt="A shelf with eleven ultraportable typewriters in their cases"
          src="../images/hero1.webp"
        />
        <div className="container front-content">

          <section className="intro-content">
            <div className="image-container">
              <StaticImage
                alt="A 1948 maroon color Gossen Tippa on a table beside its lid and leather breifcase"
                src="../images/1948 Gossen Tippa #6133 main9 1600sq.webp"
              />
            </div>
            <h2>A Curated Selection<br />of Vintage Typewriters</h2>
            <h3>Featuring Gossen and Hermes<br />Ultraportables and Portables</h3>
            <p className="dark-grey-text">
              Every typewriter offered here currently resides on a desk, table or shelf in the Northern California home of Rebecca and Patrick Jamieson. We love typewriters, and have been using them for over 50 years. (Yes, we're old. So old that we grew up without mobile phones and personal computers. And <i>with</i> typewriters.)
            </p>
            <p className="dark-grey-text">
              We've come to realize that—in order to continue to find and refresh typewriters—we have to let some from our collection go to make room for new-to-us arrivals. Our goal with each purchase being to end up with a clean, working machine.
            </p>
            <ul>
              <li>We're happy to answer questions and provide additional images.</li>
              <li>We pack very well and ship promptly upon clearance of payment.</li>
              <li>Satisfaction guaranteed with returns accepted for any reason.</li>
            </ul>
            <p className="dark-grey-text">
              Scroll down for a quick look at the typewriters we are currently offering for sale. Tap or click on an image to go directly to the Details Page that describes that typewriter and provides more images of it.
            </p>
            <h4>Check back often.</h4>
            <h4>We frequently update our offerings.</h4>
          </section>

          <section className="gallery">
            <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
            {typewriters.map(typewriter => {
              return <div key={typewriter.id}>
              {typewriter.images && <CardImageCaptionLink item={typewriter} /> }
              </div>
          })}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiTypewriter(
      sort: {order: ASC}
      filter: {available: {eq: true}}
    ) {
      nodes {
        id
        subtitle
        brand {
          name
          slug
        }
        model {
          name
          slug
        }
        year
        sn
        price
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
          name
        }
      }
    }
  }
`

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <link rel="icon" type="image/png" href="../images/icon.png"></link>
    <title>Ultraportable Typewriters - Home</title>
    <meta
      name="description"
      content="UltraportableTypewriters.com features a curated selection of working vintage typewriters. We specialize in Gossen Tippa, and Hermes Baby/Rocket ultraportable models."
    />
  </>
)

export default IndexPage;
