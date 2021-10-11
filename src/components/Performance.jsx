// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// Recharts components imports
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'
// components imports
import Loader from './Loader'
// utils imports
import { convertKind } from '../services/utils/convertKind'
// styles imports
import { RadarContainer } from '../styles/components/performance.js'
import colors from '../styles/bases/colors'
import { Err } from '../styles/bases/error'
// imports API's datas fetched and modeling classes
import { useFetch } from '../services/API'
import { userPerformance } from '../services/classModels/userPerformance'

// JSX // _________________________________________________________________

/**
 * Performance's component to display performances chart
 * @name Performance
 * @param {number} id user id
 * @returns {JSX}
 */

const Performance = ({ id }) => {
  const { data, isLoading, error } = useFetch(`${id}/performance`)
  if (error) {
    return <Err>Oups, il y a un problème de chargement des données</Err>
  }
  if (isLoading) {
    return <Loader />
  } else {
    const performanceDatas = new userPerformance(data)
    const kinds = performanceDatas.kind
    const perf = performanceDatas.data

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

// PROPTYPES // ___________________________________________________________

Performance.propTypes = {
  id: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default Performance
