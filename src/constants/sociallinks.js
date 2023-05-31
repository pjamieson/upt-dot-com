import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaGithub
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon fa-lg"></FaFacebook>,
    url: "https://www.facebook.com/JamiesonCollection",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon fa-lg"></FaGithub>,
    url: "https://github.com/pjamieson",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon fa-lg"></FaInstagram>,
    url: "https://www.instagram.com/ultraportabletypewriters/",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link nav-link waves-effect waves-light" target="_blank" rel="noreferrer">
        {link.icon}
      </a>
    </li>
  )
})

// Above could be combined here, but this is easier to follow
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {links}
    </ul>
  )
}
export default SocialLinks;
