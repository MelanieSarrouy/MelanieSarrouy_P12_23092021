import PropTypes from 'prop-types'

/**
 * To translate performance kind into french
 * @name convertKind
 * @param {string} kind 
 * @param {Array} array 
 * @returns {string}
 */

export const convertKind = (kind, array) => {
  const goodKind = array[kind]
  let frenchKind
  switch (goodKind) {
    case 'cardio':
      frenchKind = 'Cardio'
      break
    case 'energy':
      frenchKind = 'Energie'
      break
    case 'endurance':
      frenchKind = 'Endurance'
      break
    case 'strength':
      frenchKind = 'Force'
      break
    case 'speed':
      frenchKind = 'Vitesse'
      break
    case 'intensity':
      frenchKind = 'Intensité'
      break
    default:
      frenchKind = ''
      break
  }
  return frenchKind
}

// PROPTYPES // ___________________________________________________________

convertKind.propTypes = {
  kind: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired
}

