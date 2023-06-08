import React from "react";
import { Link } from "gatsby"

import { formatPrice } from "../utils/format"
import { getImageUrl } from "../utils/image-url"

const CardImageCaptionLink = ({ item }) => {
  //console.log("CardImageLinkTitle item", item)

  // Use the primary image, the first of the images set
  const image_url = getImageUrl(item.images[0])

  const title = `${item.year} ${item.brand.name} ${item.model.name}`
  const alt_text = `${item.year} ${item.brand.name} ${item.model.name} serial number ${item.sn}`
  const link = `/${item.year}-${item.brand.slug}-${item.model.slug}-${item.sn}/`
  
 return (
    <div className="card" key={item.id}>

      <div className="img-hover-zoom">
        <a href={link} className="ripple">
          <img className="img-fluid" src={image_url} alt={alt_text} />
        </a>
      </div>

      <div>
        <Link to={link} className="btn-floating btn-action btn-primary">
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-subtitle">{item.subtitle}</h5>
        <h5>{item.price > 0 ? formatPrice(item.price) : `Inquire`}</h5>
      </div>
    </div>
  )
}

export default CardImageCaptionLink;
