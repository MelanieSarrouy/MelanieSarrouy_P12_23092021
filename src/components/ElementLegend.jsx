import React from 'react'
import { Element } from '../styles/components/elementLegend'

const ElementLegend = ({ content, color }) => {
  return (
    <Element>
      <svg width="30" height="24">
        <circle cx="15" cy="12" r="4" fill={color} />
      </svg>
      <p>{content}</p>
    </Element>
  )
}

export default ElementLegend
