// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { ActivityLink, Icon } from '../styles/components/button'

// JSX // _________________________________________________________________

/**
 * Button's component to display sports icons on secondary navigation
 * @name Button
 * @param {string} name to select sport name
 * @param {string} cover to display sport icon
 * @returns {JSX}
 */

const Button = ({ name, cover }) => {
  return (
    <ActivityLink exact to={`/profil/${name}`}>
      <Icon src={cover} alt={name} />
    </ActivityLink>
  )
}

// PROPTYPES // ___________________________________________________________

Button.propTypes = {
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default Button
