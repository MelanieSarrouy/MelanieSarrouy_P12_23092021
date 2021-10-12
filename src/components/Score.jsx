// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// Recharts components imports
import {
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from 'recharts'
// components imports
import Loader from './Loader.jsx'
// utils imports
import { convertScore } from '../services/utils/convertScore'
// styles imports
import colors from '../styles/bases/colors.js'
import {
  ScoreChartContainer,
  Title,
  Result,
  BigResult,
} from '../styles/components/score.js'
import { Err } from '../styles/bases/error'
// imports API's datas fetched and modeling classes
import { useFetch } from '../services/API.js'
import { userMainData } from '../services/classModels/userMainData.js'

// JSX // _________________________________________________________________

/**
 * Score's component to display score chart
 * @name Score
 * @param {string} id user id
 * @returns {JSX}
 */

const Score = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}.json`)
  if (error) {
    return <Err>Oups, il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <Loader />
  } else {
    const mainDatas = new userMainData(data)
    const todayScore = mainDatas.todayScore
    const score = convertScore(todayScore, mainDatas)
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
}

// PROPTYPES // ___________________________________________________________

Score.propTypes = {
  id: PropTypes.number.isRequired,
}

// EXPORT // ______________________________________________________________

export default Score
