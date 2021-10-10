import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'
import {
  AverageContainer,
  Title,
  TooltipStyle,
  Days,
} from '../styles/components/average'
import { useFetch } from '../services/API'
import { Err } from '../styles/pages/profil'


const convertToWeekDay = (day) => {
  let theDay
  switch (day) {
    case 1:
      theDay = 'L'
      break
    case 2:
      theDay = 'M'
      break
    case 3:
      theDay = 'M'
      break
    case 4:
      theDay = 'J'
      break
    case 5:
      theDay = 'V'
      break
    case 6:
      theDay = 'S'
      break
    case 7:
      theDay = 'D'
      break
    default:
      theDay = ''
      break
  }
  return theDay
}
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

const Average = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/average-sessions`)
  if (error) {
    return <Err>Il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <span>...Is Loading...</span>
  } else {
    const datas = data.sessions
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

export default Average
