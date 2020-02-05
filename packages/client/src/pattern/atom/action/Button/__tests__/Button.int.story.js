import { storiesOf } from '@storybook/react'
import { defaultRender } from './Button.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Action/Button', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
