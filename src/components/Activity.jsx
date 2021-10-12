// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// Recharts components imports
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from 'recharts'
// components imports
import ElementLegend from './ElementLegend'
import Loader from './Loader'
// styles imports
import colors from '../styles/bases/colors'
import {
  ActivityContainer,
  Legend,
  Keys,
  Title,
  TooltipStyle,
} from '../styles/components/activity'
import { Err } from '../styles/bases/error'
// imports API's datas fetched and modeling classes
import { useFetch } from '../services/API'
import { userActivity } from '../services/classModels/userActivity'

// JSX // _________________________________________________________________

/**
 * CustomTooltip's componant to display and fill tooltip
 * @name CustomTooltip
 * @param {Boolean} active Tooltip is active (if is hover) or not
 * @param {array} payload datas to display in tooltip
 * @returns {?JSX}
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipStyle>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </TooltipStyle>
    )
  }
  return null
}

/**
 * Activity's component Acivity to display activity chart
 * @name Activity
 * @param {number} id user id
 * @returns {JSX}
 */

const Activity = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/activity.json`)
  if (error) {
    return <Err>Oups, il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <Loader />
  } else {
    const activityDatas = new userActivity(data)
    const datas = activityDatas.sessions
    const last10sessions = datas.slice(-10)
    const kilograms = last10sessions.map((el) => el.kilogram)
    const minWeight = Math.min(...kilograms)
    const calories = last10sessions.map((el) => el.calories)
    const maxCal = Math.max(...calories)

    return (
      <ActivityContainer>
        <Legend>
          <Title>Activité quotidienne</Title>
          <Keys>
            <ElementLegend color={colors.textDark} content={'Poids (kg)'} />
            <ElementLegend
              color={colors.primary}
              content={'Calories brûlées (kCal)'}
            />
          </Keys>
        </Legend>
        <ResponsiveContainer width="100%" height={175}>
          <BarChart data={last10sessions} barGap="12%">
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#dedede"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tickFormatter={(day) => parseInt(day.slice(-2))}
              tickLine={false}
              axisLine={{ color: '#dedede' }}
              dy={10}
              tick={{ fontSize: 14, color: '#9B9EAC' }}
              interval="preserveStartEnd"
            />
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              tickLine={false}
              axisLine={false}
              domain={[minWeight - 1, 'auto']}
              tickCount={3}
              tick={{ fontSize: 14, color: '#9B9EAC' }}
              dx={32}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              tickLine={false}
              axisLine={false}
              domain={[0, maxCal]}
              hide={true}
            />
            <Tooltip
              offset={30}
              style={TooltipStyle}
              content={<CustomTooltip />}
              coordinate={{ x: 200, y: 0 }}
            />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              barSize={7}
              fill={colors.textDark}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              barSize={7}
              fill={colors.primary}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </ActivityContainer>
    )
  }
}

// PROPTYPES // ___________________________________________________________

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

Activity.propTypes = {
  id: PropTypes.number.isRequired,
}

// EXPORT // ______________________________________________________________

export default Activity
