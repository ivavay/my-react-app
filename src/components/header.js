import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
     <Link to = "/writings">Writings</Link>
     <Link to = "/codeart">Codeart</Link>
     <Link to = "/about">About</Link>
    </div>
  </div>
)

export default Header
