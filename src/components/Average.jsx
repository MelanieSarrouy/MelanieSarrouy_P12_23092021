import React from 'react'
import { USER_AVERAGE_SESSIONS } from '../datas/mocked-datas.js'
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts'
import { AverageContainer, Title, TooltipStyle, Days } from '../utils/style/average.js'


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
  const userId = { id }.id
  const average = USER_AVERAGE_SESSIONS.find(
    (element) => element.userId === userId
  )
  const data = average.sessions
  const days = data.map((el) => el.day)

  return (
    <AverageContainer>
      <Title>Durée moyenne des sessions</Title>
      <LineChart
        data={data}
        width={260}
        height={263}
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
          cursor= {{
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
      <Days>
        {days.map((day, index) => (
          <p key={index}>{convertToWeekDay(day)}</p>
        ))}
      </Days>
    </AverageContainer>
  )
}

export default Average
