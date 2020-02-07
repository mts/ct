import { storiesOf } from '@storybook/react'
import { defaultRender } from './Loop.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Case 4 Loop', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
