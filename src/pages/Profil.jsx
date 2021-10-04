import React from 'react'
import { USER_MAIN_DATA } from '../datas/mocked-datas.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import Activity from '../components/Activity.jsx'
import FeedTags from '../components/FeedTags.jsx'
import Average from '../components/Average.jsx'
import Performance from '../components/Performance.jsx'
import Score from '../components/Score.jsx'

const Welcome = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 2.8rem;
`
const Dashboard = styled.div`
  padding: 3.4rem 7.5%;
`
const FirstName = styled.span`
  color: ${colors.primary};
`
const Charts = styled.section`
  display: grid;
  grid-template-columns: 75% 25%;
  height: 600px;
  column-gap: 2rem;
  padding-top: 5rem;
`
const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
`

const LittleCharts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const Profil = () => {
  const param = useParams()
  const userId = parseInt(param.id)
  const user = USER_MAIN_DATA.find((element) => element.id === userId)

  if (user === undefined) {
    return <NotFound />
  } else {
    const { userInfos, keyData } = user

    return (
      <Dashboard>
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
      </Dashboard>
    )
  }
}

export default Profil
