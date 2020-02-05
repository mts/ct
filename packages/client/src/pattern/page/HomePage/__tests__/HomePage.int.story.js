import { storiesOf } from '@storybook/react'
import { asyncRender, defaultRender } from './HomePage.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const asyncRenderInfo = getInfo('async')
const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Page/HomePage', module)
  .add(asyncRenderInfo.text, () => asyncRender, asyncRenderInfo.parameters)
  .add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
