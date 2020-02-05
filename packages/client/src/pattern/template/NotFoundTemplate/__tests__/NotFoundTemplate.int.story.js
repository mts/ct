import { storiesOf } from '@storybook/react'
import { defaultRender } from './NotFoundTemplate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/NotFoundTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
