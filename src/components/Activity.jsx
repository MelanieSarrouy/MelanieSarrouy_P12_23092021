import React from 'react'
import colors from '../styles/bases/colors'

import {
  ActivityContainer,
  Legend,
  Keys,
  Title,
  TooltipStyle,
} from '../styles/components/activity'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import { useFetch } from '../services/API'
import ElementLegend from './ElementLegend'
import { Err } from '../styles/pages/profil'

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

const Activity = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/activity`)
  if (error) {
    return <Err>Il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <span>...Is Loading...</span>
  } else {
    const sessions = data.sessions
    const datas = sessions.slice(-10)
    const kilograms = datas.map((el) => el.kilogram)
    const minWeight = Math.min(...kilograms)
    const calories = datas.map((el) => el.calories)
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
          <BarChart data={datas} barGap="12%">
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

export default Activity
