import React from 'react'
import uuidv1 from 'uuid/v1'
import { loopDefaultProps, loopPropTypes } from './Loop.props'
import { getRange } from '../../../../../../library/src/array'

export function Loop({ className, count }) {
  function StringTimesCount() {
    const fooString = 'Cloud'
    const barString = 'Suite'
    const fooBarString = `${fooString}${barString}`

    const parsedCount = parseInt(count, 10)

    if (Number.isNaN(parsedCount) || parsedCount === -1) {
      return null
    }

    const rangedItems = getRange({ range: count, indexSeed: 1, valueSeed: 0 })

    return rangedItems.map(rangedItem => {
      let string = rangedItem

      if (rangedItem % 3 === 0) {
        string = fooString
      }

      if (rangedItem % 5 === 0) {
        string = barString
      }

      if (rangedItem % 3 === 0 && rangedItem % 5 === 0) {
        string = fooBarString
      }

      return <div key={uuidv1()}>{string}</div>
    })
  }

  return (
    <div className={className}>
      <StringTimesCount />
    </div>
  )
}

Loop.defaultProps = loopDefaultProps

Loop.propTypes = loopPropTypes
