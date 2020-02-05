import { storiesOf } from '@storybook/react'
import { defaultRender } from './HomeTemplate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/HomeTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
