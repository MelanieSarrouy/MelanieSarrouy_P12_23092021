import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Activity from '../components/Activity.jsx'
import FeedTags from '../components/FeedTags.jsx'
import Average from '../components/Average.jsx'
import Performance from '../components/Performance.jsx'
import Score from '../components/Score.jsx'
import HeaderSection from '../components/HeaderSection'
import { Page } from '../styles/components/pages'
import {
  Charts,
  ChartsContainer,
  LittleCharts,
  Err
} from '../styles/pages/profil.js'
import { useFetch } from '../services/API.js'

const Profil = () => {
  const param = useParams()
  const userId = parseInt(param.id)
  const { data, isLoading, error } = useFetch(`${userId}`)
  if (error) {
    return <Err>Il y a un problème d'authentification de l'utilisateur</Err>
  }
  if (isLoading) {
    return <span>...Is Loading...</span>
  }
  if (data === undefined) {
    return <NotFound />
  } else {
    const userInfos = data.userInfos
    const keyData = data.keyData

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
          <FeedTags keyData={keyData} />
        </Charts>
      </Page>
    )
  }
}

export default Profil
