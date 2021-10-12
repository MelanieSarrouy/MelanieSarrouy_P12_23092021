// IMPORTS // ______________________________________________________________

import React from 'react'
import { useParams } from 'react-router-dom'
// components imports
import Activity from '../components/Activity.jsx'
import NutrientsTags from '../components/NutrientsTags.jsx'
import Average from '../components/Average.jsx'
import Performance from '../components/Performance.jsx'
import Score from '../components/Score.jsx'
import HeaderSection from '../components/HeaderSection'
import Loader from '../components/Loader.jsx'
// styles imports
import { Page } from '../styles/bases/pages'
import {
  Charts,
  ChartsContainer,
  LittleCharts
} from '../styles/pages/user.js'
import { Err } from '../styles/bases/error'
// imports API's datas fetched and modeling classes
import { useFetch } from '../services/API.js'
import { userMainData } from '../services/classModels/userMainData.js'

// JSX // _________________________________________________________________

/**
 * Profils's component to display profil page 
 * @name Profil
 * @returns {JSX}
 */

const User = () => {
  const param = useParams()
  const userId = parseInt(param.id)
  const { data, isLoading, error } = useFetch(`${userId}`)
  if (error) {
    return <Err>Oups, il y a un problème d'authentification de l'utilisateur</Err>
  }
  if (isLoading) {
    return <Loader />
  } else {
    const mainDatas = new userMainData(data)
    const userInfos = mainDatas.userInfos
    const keyData = mainDatas.keyData
    const title = 'Bonjour'
    const firstname = userInfos.firstName
    const sentence = 'Félicitation ! Vous avez explosé vos objectifs hier 👏'

    return (
      <Page>
        <HeaderSection title={title} firstname={firstname} sentence={sentence} />
        <Charts>
          <ChartsContainer>
            <Activity id={userId} />
            <LittleCharts>
              <Average id={userId} />
              <Performance id={userId} />
              <Score id={userId} />
            </LittleCharts>
          </ChartsContainer>
          <NutrientsTags keyData={keyData} />
        </Charts>
      </Page>
    )
  }
}

// EXPORT // ______________________________________________________________

export default User
