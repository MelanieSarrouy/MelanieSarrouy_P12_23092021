import React from 'react'
import { USER_MAIN_DATA } from '../datas/mocked-datas.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import Activity from '../components/Activity.jsx'
import FeedTags from '../components/FeedTags.jsx'
import Average from '../components/Average.jsx'
import Performance from '../components/Performance.jsx'
import Score from '../components/Score.jsx'
import { Page } from '../styles/components/pages'
import { Welcome } from '../styles/components/welcome'
import {
  FirstName,
  Charts,
  ChartsContainer,
  LittleCharts,
} from '../styles/pages/profil.js'

const Profil = () => {
  const param = useParams()
  const userId = parseInt(param.id)
  const user = USER_MAIN_DATA.find((element) => element.id === userId)

  if (user === undefined) {
    return <NotFound />
  } else {
    const { userInfos, keyData } = user

    return (
      <Page>
        <header>
          <Welcome>
            Bonjour <FirstName>{userInfos.firstName}</FirstName>
          </Welcome>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
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
