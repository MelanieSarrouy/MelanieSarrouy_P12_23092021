import React from 'react'
import PropTypes from 'prop-types'
import glucides from '../assets/carbs-icon.svg'
import calories from '../assets/calories-icon.svg'
import lipides from '../assets/fat-icon.svg'
import proteines from '../assets/protein-icon.svg'
import { FeedsContainer } from '../styles/components/feedTags'
import Feed from './Feed'

const FeedTags = ({ keyData }) => {
  return (
    <article>
      <h2 className="sr-only">Calories</h2>
      <FeedsContainer>
        <Feed
          src={calories}
          quantity={`${keyData.calorieCount}kCal`}
          type={'Calories'}
        />
        <Feed
          src={proteines}
          quantity={`${keyData.proteinCount}g`}
          type={'Proteines'}
        />
        <Feed
          src={glucides}
          quantity={`${keyData.carbohydrateCount}g`}
          type={'Glucides'}
        />
        <Feed
          src={lipides}
          quantity={`${keyData.lipidCount}g`}
          type={'Lipides'}
        />
      </FeedsContainer>
    </article>
  )
}

FeedTags.propTypes = {
  keyData: PropTypes.object.isRequired,
}

export default FeedTags
