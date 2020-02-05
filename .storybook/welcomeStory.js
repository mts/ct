import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('CT', module).add(`v${version} 🎉`, () => <h1>Welcome to {`CT v${version}`}</h1>)
