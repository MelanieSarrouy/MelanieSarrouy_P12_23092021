import React from 'react'
import styled from 'styled-components'
import colors from '../utils/style/colors'
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

const ActivityContainer = styled.article`
  background-color: #fbfbfb;
  padding: 2rem;
  border-radius: 0.35rem;
`
const Legend1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`
const Keys = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Title = styled.h2`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #20253a;
`
const Element = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${colors.textLight};
  padding-left: 2rem;
  display: flex;
  justify-content: flex-end;
`
const TooltipStyle = styled.div`
  background-color: ${colors.primary};
  color: white;
  font-size: 0.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  height: 4rem;
`

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
  console.log(data)
  const days = data.map((el) => el.day)

  const kilograms = data.map((el) => el.kilogram)
  console.log(kilograms)
  const minWeight = Math.min(...kilograms)
  console.log(minWeight)
  const maxWeight = Math.max(...kilograms)
  console.log(maxWeight)

  const calories = data.map((el) => el.calories)
  console.log(calories)
  const maxCal = Math.max(...calories)
  console.log(maxCal)

  return (
    <ActivityContainer>
      <Legend1>
        <Title>Activité quotidienne</Title>
        <Keys>
          <Element className="color" round={colors.textDark}>
            <svg width="40" height="24">
              <circle cx="20" cy="12" r="4" fill={colors.textDark} />
            </svg>
            <p>Poids (kg)</p>
          </Element>
          <Element className="color" round={colors.primary}>
            <svg width="40" height="24">
              <circle cx="20" cy="12" r="4" fill={colors.primary} />
            </svg>

            <p>Calories brûlées (kCal)</p>
          </Element>
        </Keys>
      </Legend1>
      <ResponsiveContainer width="100%" height={185}>
        <BarChart data={data} barGap="12%" margin={0}>
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
            padding={{left: -39, right: -40}}
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
            orientation="left"
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
