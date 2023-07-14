import React, { FC } from 'react'
import { Title as TitleMantine, TitleProps } from '@mantine/core'

interface ITitleProps extends TitleProps {}

export const Title: FC<ITitleProps> = ({ children, ...rest }) => {
  return (
    <TitleMantine order={2} {...rest}>
      {children}
    </TitleMantine>
  )
}
