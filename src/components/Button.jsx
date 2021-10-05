import React from 'react'
import { ActivityLink, Icon } from '../styles/components/button'

const Button = ({ name, cover }) => {
  return (
    <ActivityLink exact to={`/profil/${name}`}>
      <Icon src={cover} alt={name} />
    </ActivityLink>
  )
}

export default Button
