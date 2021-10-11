import PropTypes from 'prop-types'

/**
 * to convert score into todayScore
 * @name convertScore
 * @param {number} todayScore 
 * @param {array} datas 
 * @returns {number}
 */

export const convertScore = (todayScore, datas) => {
  if (todayScore === undefined) {
    return datas.score
  } else {
    return datas.todayScore
  }
}

// PROPTYPES // ___________________________________________________________

convertScore.propTypes = {
  todayScore: PropTypes.number.isRequired,
  datas: PropTypes.array.isRequired
}
