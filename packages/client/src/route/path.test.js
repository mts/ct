/* eslint-disable global-require */
describe('path', () => {
  const someBaseUrl = 'some-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const requirePath = () => {
    return require('./path')
  }

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('homePagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { homePagePath } = requirePath()
      expect(homePagePath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { homePagePath } = requirePath()
      expect(homePagePath).toBe('/')
    })
  })
})

/* eslint-enable global-require */
