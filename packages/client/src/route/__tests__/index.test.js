/* eslint-disable import/no-dynamic-require, global-require */
import React from 'react'

const mockRequireHomePage = () => {
  const homePagePath = '../../pattern/page/HomePage'
  jest.mock(homePagePath, () => {
    return <div>HomePage</div>
  })
  return require(homePagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => {
    return <div>NotFoundPage</div>
  })
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => {
    return {
      homePagePath: 'some-home-page-path',
    }
  })
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => {
    return require('../index')
  }

  describe('homePageRoute', () => {
    const homePage = mockRequireHomePage()

    const expectedHomePageRoute = {
      path: path.homePagePath,
      exact: true,
      clientComponent: homePage.AsyncHomePage,
      serverComponent: homePage.HomePage,
    }

    test('must return home page route object', () => {
      const { homePageRoute } = requireIndex()
      expect(homePageRoute).toEqual(expectedHomePageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
