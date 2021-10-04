import React from 'react'
import { USER_MAIN_DATA } from '../datas/mocked-datas.js'
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts'
import styled from 'styled-components'
import colors from '../utils/style/colors.js'

const ScoreChartContainer = styled.article`
  background-color: 'white';
  border-radius: 0.35rem;
  width: 16.2rem;
  height: 263px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Title = styled.h2`
  color: '#20253A';
  font-size: 0.95rem;
  font-weight: 500;
  max-width: 9.5rem;
  line-height: 1.5rem;
  padding: 1.5rem 0 1rem 1.5rem;
  opacity: 0.5;
  align-self: flex-start;
  position: absolute;
  left: 0;
`
const Result = styled.p`
  text-align: center;
  line-height: 1.6rem;
  color: ${colors.textLight};
  font-size: 1rem;
  font-weight: 500;
  position: absolute;
`
const BigResult = styled.span`
  color: ${colors.textDark};
  font-size: 1.6rem;
  font-weight: 700;
`
const Score = ({ id }) => {
  const userId = { id }.id
  const data = USER_MAIN_DATA.find((element) => element.id === userId)

  return (
    <ScoreChartContainer>
      <Title>Score</Title>
      <Result>
        <BigResult>{(data.todayScore || data.score) * 100}% </BigResult>
        <br />
        de votre
        <br />
        objectif
      </Result>
      <RadialBarChart
        innerRadius={400}
        outerRadius={110}
        barSize={12}
        data={data}
        startAngle={90}
        endAngle={-270}
        background="#FF0000"
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 360]}
          angleAxisId={0}
          tick={false}
          fill={colors.primary}
        />
        <RadialBar
          background={{ fill: 'white' }}
          clockWise
          dataKey="todayScore"
          cornerRadius={6}
          fill={colors.primary}
        />
      </RadialBarChart>
    </ScoreChartContainer>
  )
}

export default Score
