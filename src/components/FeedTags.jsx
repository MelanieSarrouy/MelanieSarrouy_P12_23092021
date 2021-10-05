import React from 'react'
import glucides from '../assets/carbs-icon.svg'
import calories from '../assets/calories-icon.svg'
import lipides from '../assets/fat-icon.svg'
import proteines from '../assets/protein-icon.svg'
import {
  FeedsContainer,
  Feed,
  Icon,
  Quantity,
  Kind,
} from '../styles/components/feedTags'

const FeedTags = ({ keyData }) => {
  return (
    <article>
      <h2 className="sr-only">Calories</h2>
      <FeedsContainer>
        <Feed>
          <Icon src={calories} alt="icone calories" />
          <div>
            <Quantity>{keyData.calorieCount}kCal</Quantity>
            <Kind>Calories</Kind>
          </div>
        </Feed>
        <Feed>
          <Icon src={proteines} alt="icone proteines" />
          <div>
            <Quantity>{keyData.proteinCount}g</Quantity>
            <Kind>Proteines</Kind>
          </div>
        </Feed>
        <Feed>
          <Icon src={glucides} alt="icone glucides" />
          <div>
            <Quantity>{keyData.carbohydrateCount}g</Quantity>
            <Kind>Glucides</Kind>
          </div>
        </Feed>
        <Feed>
          <Icon src={lipides} alt="icone lipides" />
          <div>
            <Quantity>{keyData.lipidCount}g</Quantity>
            <Kind>Lipides</Kind>
          </div>
        </Feed>
      </FeedsContainer>
    </article>
  )
}

export default FeedTags
