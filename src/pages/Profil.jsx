import React from 'react'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/mocked-datas.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import glucides from '../assets/carbs-icon.svg'
import calories from '../assets/calories-icon.svg'
import lipides from '../assets/fat-icon.svg'
import proteines from '../assets/protein-icon.svg'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const Welcome = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 2.8rem;
`
const Dashboard = styled.div`
  padding: 3.4rem 6.8rem;
`
const FirstName = styled.span`
  color: ${colors.primary};
`
const Charts = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 5rem;
`
const Feed = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 7.75rem;
  width: 16.15rem;
  background-color: #fbfbfb;
  border-radius: 0.35rem;
  margin-bottom: 2.45rem
`
const Icon = styled.img`
  width: 3.75rem;
  height: auto;
  margin: 1.5rem;
`
const Quantity = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${colors.textDark};
  padding-bottom: 0.2rem
`
const Kind = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.textLight};
`

const Profil = () => {
  const param = useParams()
  const userId = parseInt(param.id)
  const user = USER_MAIN_DATA.find((element) => element.id === userId)
  const { userInfos, keyData } = user
  const activity = USER_ACTIVITY.find((element) => element.userId === userId)
  const average = USER_AVERAGE_SESSIONS.find(
    (element) => element.userId === userId
  )
  const performance = USER_PERFORMANCE.find(
    (element) => element.userId === userId
  )
  console.log(activity)
  console.log(average)
  console.log(performance)

  if (user === undefined) {
    return <NotFound />
  } else {
    return (
      <Dashboard>
        <header>
          <Welcome>
            Bonjour <FirstName>{userInfos.firstName}</FirstName>
          </Welcome>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <Charts>
          <div>
            <article>
              <h2>Activité quotidienne</h2>
            </article>
            <div>
              <article>
                <h2>Durée moyenne des sessions</h2>
              </article>
              <article>
                <h2 className="sr-only">Performances</h2>
              </article>
              <article>
                <h2>Score</h2>
                <p>
                  <span>{(user.todayScore || user.score) * 100}% </span>
                  <br />
                  de votre objectif
                </p>
              </article>
            </div>
          </div>
          <article>
            <h2 className="sr-only">Calories</h2>
            <ul>
              <Feed>
                <Icon src={calories} alt="icone calories" />
                <div>
                  <Quantity>{keyData.calorieCount}kCal</Quantity>
                  <Kind>Calories</Kind>
                </div>
              </Feed>
              <Feed>
                <Icon src={proteines} alt="icone proteines" />
                <div>
                  <Quantity>{keyData.proteinCount}g</Quantity>
                  <Kind>Proteines</Kind>
                </div>
              </Feed>
              <Feed>
                <Icon src={glucides} alt="icone glucides" />
                <div>
                  <Quantity>{keyData.carbohydrateCount}g</Quantity>
                  <Kind>Glucides</Kind>
                </div>
              </Feed>
              <Feed>
                <Icon src={lipides} alt="icone lipides" />
                <div>
                  <Quantity>{keyData.lipidCount}g</Quantity>
                  <Kind>Lipides</Kind>
                </div>
              </Feed>
            </ul>
          </article>
        </Charts>
      </Dashboard>
    )
  }
}

export default Profil
