import { getAppMockStore } from '../mock'

jest.mock('../../state/mock', () => ({
  mockAppState: { someData: 'some-data' },
}))

describe('mock', () => {
  const customDataObject = { someCustomData: 'some-custom-data' }

  describe('getAppMockStore()', () => {
    test('must return a store with default data when custom data not provided ', () => {
      const store = getAppMockStore()

      expect(store.getState()).toMatchObject({ someData: 'some-data' })
    })

    test('must return a store with custom data when custom data provided', () => {
      const store = getAppMockStore(customDataObject)

      expect(store.getState()).toMatchObject(customDataObject)
    })
  })
})
