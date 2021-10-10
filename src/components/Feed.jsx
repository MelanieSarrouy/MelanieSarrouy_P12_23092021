import React from 'react'
import { FeedElement, Icon, Quantity, Kind } from '../styles/components/feed'

const Feed = ({ src, quantity, type }) => {
  return (
    <FeedElement>
      <Icon src={src} alt="icone calories" />
      <div>
        <Quantity>{quantity}</Quantity>
        <Kind>{type}</Kind>
      </div>
    </FeedElement>
  )
}

export default Feed
