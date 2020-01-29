import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img
          src={require('../assits/img/logo-designcode.svg')}
          width="35"
          alt="Logo"
        />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/download">Download</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>buy</button>
      </Link>
    </div>
  </div>
)

export default Header
