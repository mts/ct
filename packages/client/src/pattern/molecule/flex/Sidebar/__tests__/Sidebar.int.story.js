import { storiesOf } from '@storybook/react'
import { defaultRender } from './Sidebar.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Case 2 Flex Sidebar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
