import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/jair.png'
import './Header.css'

const Header = ({ siteTitle }) => (
<div className="Header">
   <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"></img></Link>
      <Link to="/dribbble">Dribbble</Link>
      <Link to="/linkend">Linkend</Link>
      <Link to="/instagram">Instagram</Link>
   </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
