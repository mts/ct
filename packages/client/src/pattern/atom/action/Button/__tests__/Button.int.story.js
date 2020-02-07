import { storiesOf } from '@storybook/react'
import { defaultRender } from './Button.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Case 1 Button', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
