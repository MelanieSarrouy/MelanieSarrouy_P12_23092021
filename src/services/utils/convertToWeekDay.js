import PropTypes from 'prop-types'

/**
 * Change xAxis value
 * @name convertToWeekDay
 * @param {number} day data fetched
 * @returns {string} value displayed
 */

 export const convertToWeekDay = (day) => {
  let theDay
  switch (day) {
    case 1:
      theDay = 'L'
      break
    case 2:
      theDay = 'M'
      break
    case 3:
      theDay = 'M'
      break
    case 4:
      theDay = 'J'
      break
    case 5:
      theDay = 'V'
      break
    case 6:
      theDay = 'S'
      break
    case 7:
      theDay = 'D'
      break
    default:
      theDay = ''
      break
  }
  return theDay
}

// PROPTYPES // ___________________________________________________________

convertToWeekDay.propTypes = {
  day: PropTypes.string.isRequired
}

