import React from 'react'
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'
import colors from '../styles/bases/colors'
import { RadarContainer } from '../styles/components/performance.js'
import { useFetch } from '../services/API'
import { Err } from '../styles/pages/profil'

const convertKind = (kind, array) => {
  const goodKind = array[kind]
  let frenchKind
  switch (goodKind) {
    case 'cardio':
      frenchKind = 'Cardio'
      break
    case 'energy':
      frenchKind = 'Energie'
      break
    case 'endurance':
      frenchKind = 'Endurance'
      break
    case 'strength':
      frenchKind = 'Force'
      break
    case 'speed':
      frenchKind = 'Vitesse'
      break
    case 'intensity':
      frenchKind = 'Intensité'
      break
    default:
      frenchKind = ''
      break
  }
  return frenchKind
}

const Performance = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/performance`)
  if (error) {
    return <Err>Il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <span>...Is Loading...</span>
  } else {
    const kinds = data.kind
    const perf = data.data

    return (
      <RadarContainer>
        <h2 className="sr-only">Performances</h2>
        <ResponsiveContainer width="100%" height={263}>
          <RadarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="70%"
            data={perf}
            width={260}
            height={263}
            startAngle={-150}
            endAngle={210}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              tickFormatter={(kind) => convertKind(kind, kinds)}
              tick={{ fontSize: 12 }}
              stroke="white"
              dy={5}
            />
            <Radar
              name="Performance"
              dataKey="value"
              fill={colors.primary}
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </RadarContainer>
    )
  }
}

export default Performance
