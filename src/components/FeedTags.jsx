import React from 'react'
import glucides from '../assets/carbs-icon.svg'
import calories from '../assets/calories-icon.svg'
import lipides from '../assets/fat-icon.svg'
import proteines from '../assets/protein-icon.svg'
import {
  FeedsContainer,
  Feed,
  Icon,
  FeedContainerText,
  Quantity,
  Kind,
} from '../utils/style/feedTags'

const FeedTags = ({ keyData }) => {
  return (
    <article>
      <h2 className="sr-only">Calories</h2>
      <FeedsContainer>
        <Feed>
          <Icon src={calories} alt="icone calories" />
          <FeedContainerText>
            <Quantity>{keyData.calorieCount}kCal</Quantity>
            <Kind>Calories</Kind>
          </FeedContainerText>
        </Feed>
        <Feed>
          <Icon src={proteines} alt="icone proteines" />
          <FeedContainerText>
            <Quantity>{keyData.proteinCount}g</Quantity>
            <Kind>Proteines</Kind>
          </FeedContainerText>
        </Feed>
        <Feed>
          <Icon src={glucides} alt="icone glucides" />
          <FeedContainerText>
            <Quantity>{keyData.carbohydrateCount}g</Quantity>
            <Kind>Glucides</Kind>
          </FeedContainerText>
        </Feed>
        <Feed>
          <Icon src={lipides} alt="icone lipides" />
          <FeedContainerText>
            <Quantity>{keyData.lipidCount}g</Quantity>
            <Kind>Lipides</Kind>
          </FeedContainerText>
        </Feed>
      </FeedsContainer>
    </article>
  )
}

export default FeedTags
