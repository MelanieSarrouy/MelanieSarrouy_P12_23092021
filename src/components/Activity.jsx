import React from 'react'
import colors from '../utils/style/colors'
import {
  ActivityContainer,
  Legend,
  Keys,
  Title,
  Element,
  TooltipStyle,
} from '../utils/style/activity'
import { USER_ACTIVITY } from '../datas/mocked-datas.js'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from 'recharts'

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
  const userId = { id }.id
  const activity = USER_ACTIVITY.find((element) => element.userId === userId)
  const data = activity.sessions.slice(-10)
  const days = data.map((el) => el.day)

  const kilograms = data.map((el) => el.kilogram)
  const minWeight = Math.min(...kilograms)

  const calories = data.map((el) => el.calories)
  const maxCal = Math.max(...calories)

  return (
    <ActivityContainer>
      <Legend>
        <Title>Activité quotidienne</Title>
        <Keys>
          <Element>
            <svg width="30" height="24">
              <circle cx="15" cy="12" r="4" fill={colors.textDark} />
            </svg>
            <p>Poids (kg)</p>
          </Element>
          <Element>
            <svg width="30" height="24">
              <circle cx="15" cy="12" r="4" fill={colors.primary} />
            </svg>
            <p>Calories brûlées (kCal)</p>
          </Element>
        </Keys>
      </Legend>
      <ResponsiveContainer width="100%" height={175}>
        <BarChart
          data={data}
          barGap="12%"
        >
          <CartesianGrid
            strokeDasharray="2 2"
            stroke="#dedede"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => days.indexOf(day) + 1}
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

export default Activity
