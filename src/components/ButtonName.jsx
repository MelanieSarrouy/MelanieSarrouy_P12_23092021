// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { UserLink, Name } from '../styles/components/ButtonName'

// JSX // _________________________________________________________________

/**
 * ButtonName's component to display users's buttons on homepage
 * @name ButtonName
 * @param {string} linkId to select the good link
 * @param {string} firstname to display user name
 * @returns {JSX}
 */
const ButtonName = ({ linkId, firstname }) => {
  return (
    <UserLink to={linkId}>
      <Name>{firstname}</Name>
    </UserLink>
  )
}

// PROPTYPES // ___________________________________________________________

ButtonName.propTypes = {
  linkId: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default ButtonName
