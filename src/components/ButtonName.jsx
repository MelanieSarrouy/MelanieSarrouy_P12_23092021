import React from 'react'
import { UserLink, Name } from '../styles/components/ButtonName'

const ButtonName = ({ linkId, firstname }) => {
  return (
    <UserLink to={linkId}>
      <Name>{firstname}</Name>
    </UserLink>
  )
}

export default ButtonName
