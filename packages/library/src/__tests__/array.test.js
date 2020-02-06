import { getRange } from '../array'

describe('array', () => {
  describe('getRange()', () => {
    test('must return an array of range with given range, indexSeed and valueSeed', () => {
      const expectedArray = [3, 4, 5, 6, 7]

      const rangedItems = getRange({ range: 5, indexSeed: 3, valueSeed: 0 })

      expect(expectedArray).toEqual(rangedItems)
    })
  })
})
