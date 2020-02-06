import { storiesOf } from '@storybook/react'
import { defaultRender } from './Layout.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Responsive/Layout', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
