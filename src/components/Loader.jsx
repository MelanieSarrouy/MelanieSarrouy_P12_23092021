// IMPORTS // ______________________________________________________________

import React from 'react'
// components imports
import { DivContainerWrap, Wrap, Text, BounceBall } from '../styles/components/loader'

// JSX // _________________________________________________________________

/**
 * Loader's componant to display a loader waiting data fetch
 * @name Loader
 * @returns {JSX}
 */

const Loader = () => {
  return (
    <DivContainerWrap>
      <Wrap>
        <div>
          <BounceBall></BounceBall>
          <Text>...IS LOADING</Text>
        </div>
      </Wrap>
    </DivContainerWrap>
  )
}

// EXPORT // ______________________________________________________________

export default Loader
