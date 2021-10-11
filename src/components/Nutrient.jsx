// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// styles imports
import {
  NutrientElement,
  Icon,
  Quantity,
  Kind,
} from '../styles/components/nutrient'

// JSX // _________________________________________________________________

/**
 * Nutrient's component to display nutrient's icon, value ans quantity
 * @name Nutrient
 * @param {string} src icon src attribute
 * @param {string} quantity quantity of nutrient
 * @param {string} type type of nutrient
 * @returns {JSX}
 */

const Nutrient = ({ src, quantity, type }) => {
  return (
    <NutrientElement>
      <Icon src={src} alt={`icone ${type}`} />
      <div>
        <Quantity>{quantity}</Quantity>
        <Kind>{type}</Kind>
      </div>
    </NutrientElement>
  )
}

// PROPTYPES // ___________________________________________________________

Nutrient.propTypes = {
  src: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

export default Nutrient
