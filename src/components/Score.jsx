import React from 'react'
import { USER_MAIN_DATA } from '../datas/mocked-datas.js'
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from 'recharts'
import colors from '../styles/bases/colors.js'
import {
  ScoreChartContainer,
  Title,
  Result,
  BigResult,
} from '../styles/components/score.js'

const Score = ({ id }) => {
  const userId = { id }.id
  const data = USER_MAIN_DATA.find((element) => element.id === userId)
  let score
  data.todayScore === undefined
    ? (score = data.score)
    : (score = data.todayScore)
  const newData = [
    {
      todayScore: score,
    },
  ]

  return (
    <ScoreChartContainer>
      <Title>Score</Title>
      <Result>
        <BigResult>{score * 100}% </BigResult>
        <br />
        de votre
        <br />
        objectif
      </Result>
      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          data={newData}
          startAngle={-280}
          endAngle={80}
          barSize={12}
        >
          <PolarAngleAxis domain={[0, 1]} tick={false} type="number" />
          <RadialBar
            minAngle={10}
            dataKey="todayScore"
            fill={colors.primary}
            cornerRadius={6}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </ScoreChartContainer>
  )
}

export default Score
