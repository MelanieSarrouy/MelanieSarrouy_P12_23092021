// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// components imports
import Nutrient from './Nutrient'
// styles imports
import { NutrientsContainer } from '../styles/components/nutrientsTags'
// datas imports
import glucides from '../assets/carbs-icon.svg'
import calories from '../assets/calories-icon.svg'
import lipides from '../assets/fat-icon.svg'
import proteines from '../assets/protein-icon.svg'

// JSX // _________________________________________________________________

/**
 * NutrientsTags's component to display nutrients tags
 * @name NutrientsTags
 * @param {Object} keyData nutrients datas fetched
 * @returns {JSX}
 */

const NutrientsTags = ({ keyData }) => {
  return (
    <article>
      <h2 className="sr-only">Calories</h2>
      <NutrientsContainer>
        <Nutrient
          src={calories}
          quantity={`${keyData.calorieCount}kCal`}
          type={'Calories'}
        />
        <Nutrient
          src={proteines}
          quantity={`${keyData.proteinCount}g`}
          type={'Proteines'}
        />
        <Nutrient
          src={glucides}
          quantity={`${keyData.carbohydrateCount}g`}
          type={'Glucides'}
        />
        <Nutrient
          src={lipides}
          quantity={`${keyData.lipidCount}g`}
          type={'Lipides'}
        />
      </NutrientsContainer>
    </article>
  )
}

// PROPTYPES // ___________________________________________________________

NutrientsTags.propTypes = {
  keyData: PropTypes.objectOf(PropTypes.number).isRequired,
}

// EXPORT // ______________________________________________________________

export default NutrientsTags
