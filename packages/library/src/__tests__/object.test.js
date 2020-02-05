import { deepCloneObject } from '../object'

describe('library', () => {
  describe('deepCloneObject()', () => {
    test('must return a clone of given object', () => {
      const object = { someObject: { someNestedObject: { someNestedObjectProperty: 'some-nested-object-property' } } }

      const cloneObject = deepCloneObject(object)

      expect(cloneObject).toMatchObject(object)
      expect(cloneObject).not.toBe(object)
    })

    test('must return undefined when given no object', () => {
      const cloneObject = deepCloneObject()

      expect(cloneObject).toBeUndefined()
    })
  })
})
