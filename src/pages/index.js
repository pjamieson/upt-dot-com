import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Seo } from "../components/seo"
import Layout from "../components/layout"
import FeaturedImagelink from "../components/featured-image-link"

const IndexPage = ({data}) => {
  const {
    allStrapiTypewriter: { nodes: typewriters },
  } = data
  //console.log("index.js typewriters", typewriters)
  return (
    <Layout>
      <div className="container site-container">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/hero1.webp"
        />
        <div className="container front-content">

          <section className="intro-content">
            <div className="image-container">
              <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/1948 Gossen Tippa #6133 reardet2 1500.webp"
              />
            </div>
            <h2>A Curated Selection of Vintage Typewriters</h2>
            <h3>Featuring Ultraportables and Portables from Gossen and Hermes</h3>
            <p className="dark-grey-text">
              Every typewriter offered here currently resides on a desk, table or shelf in the Northern California home of Rebecca and Patrick Jamieson. We love typewriters, and have been using them for over 50 years. (Yes, we're old. So old that we grew up without mobile phones and personal computers.)
            </p>
            <p className="dark-grey-text">
              We've come to realize that--in order to continue to find and refresh typewriters--we have to let some go from our collection to make room for new-to-us arrilals. Our goal being to end up with a clean, working .
            </p>
            <ul>
              <li>We're happy to answer questions and provide additional images.</li>
              <li>We pack very well and ship promptly upon clearance of payment.</li>
              <li>Satisfaction guaranteed with returns accepted for any reason.</li>
            </ul>
            <p className="dark-grey-text">
              Scroll down for a quick look at the typewriters we are offering for sale. Tap or click on an image to go directly to the Gallery Page that describes that typewriter in detail.
            </p>
            <h4>Check back often.</h4>
            <h4>We frequently update our offerings.</h4>
          </section>

          <section className="gallery">
            <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
            {typewriters.map(typewriter => {
              return <div key={typewriter.strapi_id}>
                {typewriter.images && <FeaturedImagelink item={typewriter} />}
              </div>
            })}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="Home Page - UltraportableTypewriters</title" />
  </>
)

export const query = graphql`
  {
    allStrapiTypewriter(filter: {available: {eq: true}}) {
      nodes {
        strapi_id
        brand {
          name
          slug
        }
        model {
          name
          slug
        }
        year
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

export default IndexPage;

/*
            {paintings.map(painting => {
              return <div key={painting.slug}>
                {painting.images && <FeaturedImagelink item={painting} />}
              </div>
            })}
*/