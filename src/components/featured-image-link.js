import React from 'react';
import { getCreatorFullName } from "../utils/creator"
import { getImageUrl } from "../utils/image-url"

const FeaturedImagelink = ({ item }) => {
  //console.log("FeaturedImagelink item", item)

  // Use the primary image, the first of the images set
  const image_url = ( item.images[0] ? getImageUrl(item.images[0], "medium") : "" )

  const alt_text = `${item.year} ${item.brand.slug} ${item.model.slug} serial number ${item.sn}`
  const link = `/${item.brand.slug}/${item.model.slug}/${item.sn}/`

  return (
    <div className="img-hover-zoom">
      <a href={link} className="ripple">
        <img className="" src={image_url} alt={alt_text} />
      </a>
    </div>
  )
}

export default FeaturedImagelink;
