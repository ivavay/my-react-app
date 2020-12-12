import React from 'react'
import Link from 'gatsby-link'
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
     <Link to = "/writings">Writings</Link>
    </div>
  </div>
)

export default Header
