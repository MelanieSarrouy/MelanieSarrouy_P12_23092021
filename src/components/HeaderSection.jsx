// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// components imports
import { Welcome, FirstName } from '../styles/components/headerSection'

// JSX // _________________________________________________________________

/**
 * HeaderSection's componant to display section's header
 * @name HeaderSection
 * @param {string} title 
 * @param {string} firstname
 * @param {string} sentence
 * @returns {JSX}
 */

const HeaderSection = ({ title, firstname, sentence }) => {
  return (
    <header>
      <Welcome>
        {title}
        <FirstName> {firstname}</FirstName>
      </Welcome>
      <p>{sentence}</p>
    </header>
  )
}

// PROPTYPES // ___________________________________________________________

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired
}

// EXPORT // ______________________________________________________________

export default HeaderSection
