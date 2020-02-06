import { storiesOf } from '@storybook/react'
import { defaultRender } from './Sidebar.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Layout/Sidebar', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
