// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// Recharts components imports
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'
// components imports
import Loader from './Loader'
// utils imports
import { convertToWeekDay } from '../services/utils/convertToWeekDay'
// styles imports
import {
  AverageContainer,
  Title,
  TooltipStyle,
  Days,
} from '../styles/components/average'
import { Err } from '../styles/bases/error'
// imports API's datas fetched and modeling classes
import { useFetch } from '../services/API'
import { userAverageSessions } from '../services/classModels/userAverageSessions'

// JSX // _________________________________________________________________

/**
 * CustomTooltip's component to display and fill tooltip
 * @name CustomTooltip
 * @param {Boolean} active Tooltip is active (if is hover) or not
 * @param {array} payload data to display in tooltip
 * @returns {?JSX}
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipStyle>
        <p>{payload[0].value} min</p>
      </TooltipStyle>
    )
  }
  return null
}

/**
 * Average's component to display average sessions length chart
 * @name Average
 * @param {number} id user id
 * @returns {JSX}
 */

const Average = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/average-sessions`)
  if (error) {
    return <Err>Oups, il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <Loader />
  } else {
    const averageSessionsDatas = new userAverageSessions(data)
    const datas = averageSessionsDatas.sessions
    const days = datas.map((el) => el.day)

    return (
      <AverageContainer>
        <Title>Durée moyenne des sessions</Title>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={datas}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              tickFormatter={(day) => convertToWeekDay(day)}
              axisLine={false}
              tickLine={false}
              tickSize={12}
              tickMargin={10}
              tick={{ fontSize: 12, color: 'white' }}
              stroke="rgba(255, 255, 255, 0.5)"
              hide={true}
            />
            <YAxis
              hide={true}
              domain={['dataMin-30', 'dataMax+40']}
              tickLine={false}
              axisLine={false}
              tickCount={0}
            />
            <Tooltip
              style={TooltipStyle}
              content={<CustomTooltip />}
              cursor={{
                stroke: 'black',
                strokeOpacity: 0.1,
                strokeWidth: 70,
                fill: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
              activeDot={{
                stroke: 'white',
                strokeOpacity: 0.2,
                fill: 'white',
                strokeWidth: 10,
                r: 4,
              }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
        <Days>
          {days.map((day, index) => (
            <p key={index}>{convertToWeekDay(day)}</p>
          ))}
        </Days>
      </AverageContainer>
    )
  }
}

// PROPTYPES // ___________________________________________________________

Average.propTypes = {
  id: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default Average
