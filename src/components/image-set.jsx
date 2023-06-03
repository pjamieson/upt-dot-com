import React from "react"
import { Script } from "gatsby"
import { MDBLightbox, MDBLightboxItem } from "mdb-react-ui-kit"
import { getImageUrl } from "../utils/image-url"

const ImageSet = ({ title, images }) => {
  //console.log("ImageSet images", images)

  // Check for first of multiple images being vertical
  let two_up = false
  if ( (images.length > 1) && images[0].width && images[0].height && (images[0].height > images[0].width ) ) {
    two_up = true
  }

  //const alt_text = `The ${form} ${title} by the ${prof} ${creatorname}`

  let key = 0
  
  return ( <>
    <Script src="./src/styles/uikit.min.js" />
    <section>
      { !two_up &&
        <img src={getImageUrl(images[0], "medium")} className="img-fluid card" alt={title} />
      }
      { two_up &&
        <div className="gallery-image-container">
          <img src={getImageUrl(images[0], "medium")} className="img-fluid card" alt={title} />
          <img src={getImageUrl(images[1], "medium")} className="img-fluid card" alt={title} />
        </div>
      }

      { images.length > 2 && typeof document !== "undefined" &&
        <div className="lightbox-container">
          <p>Click on any image below to enlarge it</p>
          <MDBLightbox className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
          { images.map(image => {
            return <MDBLightboxItem key={++key}
              src={getImageUrl(image, "medium")}
              fullscreenSrc={getImageUrl(image, "large")}
              className="card" />
            })
          }
          </MDBLightbox>
        </div>
      }
    </section></>
  )
}

export default ImageSet;
