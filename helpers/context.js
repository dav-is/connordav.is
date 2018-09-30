// @flow
import * as React from 'react'
import { backgrounds } from './constants'

export const BackgroundContext = React.createContext({
  background: backgrounds.default
})
