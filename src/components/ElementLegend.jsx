// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import { Element } from '../styles/components/elementLegend'

// JSX // _________________________________________________________________

/**
 * ElementLegend's component to display activity chart legend
 * @name ElementLegend
 * @param {string} content legend's value
 * @param {string} color legend's color
 * @returns {JSX}
 */
const ElementLegend = ({ content, color }) => {
  return (
    <Element>
      <svg width="30" height="24">
        <circle cx="15" cy="12" r="4" fill={color} />
      </svg>
      <p>{content}</p>
    </Element>
  )
}

// PROPTYPES // ___________________________________________________________

ElementLegend.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default ElementLegend
