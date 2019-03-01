import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

import { NavLink as Link } from 'react-router-dom'

const StyledLink = styled(Link)`
	${space}
  ${width}
  ${fontSize}
  ${color}
  text-decoration: none;
  transition: 0.3s;
  &:hover {
  	background-color: darkmagenta;
  }
`

StyledLink.defaultProps = {
	color: 'white',
	p: '20px',
}

const NavLink = ({ children, ...rest}) => (
	<StyledLink {...rest}>{children}</StyledLink>
)

export default NavLink