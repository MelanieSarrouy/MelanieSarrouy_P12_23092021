import React from 'react'
import PropTypes from 'prop-types'
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

Feed.propTypes = {
  src: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Feed
