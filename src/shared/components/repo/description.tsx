import React from 'react'

import {P} from '../grid'

interface IProps {
  text: string | undefined
}

export const Description: React.SFC<IProps> = ({text}) => (
  <P>{text}</P>
) as React.ReactElement<any>
