import { storiesOf } from '@storybook/react'
import { defaultRender } from './Layout.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Case 3 Responsive Layout', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
