import React from 'react';
import { getImageUrl } from "../utils/image-url"

const FeaturedImagelink = ({ item }) => {
  //console.log("FeaturedImagelink item", item)

  // Use the primary image, the first of the images set
  const image_url = getImageUrl(item.images[0])

  const alt_text = `${item.year} ${item.brand.name} ${item.model.name} serial number ${item.sn}`
  const link = `/${item.year}-${item.brand.slug}-${item.model.slug}-${item.sn}/`

  return (
    <div className="img-hover-zoom">
      <a href={link} className="ripple">
        <img className="" src={image_url} alt={alt_text} />
      </a>
    </div>
  )
}

export default FeaturedImagelink;
