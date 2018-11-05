// @flow
import * as React from 'react'
import { backgrounds } from './constants'

export const BackgroundContext: Object = React.createContext(backgrounds.defaultKey)
