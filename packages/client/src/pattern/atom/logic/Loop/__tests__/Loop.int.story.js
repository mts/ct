import { storiesOf } from '@storybook/react'
import { defaultRender } from './Loop.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Logic/Loop', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
