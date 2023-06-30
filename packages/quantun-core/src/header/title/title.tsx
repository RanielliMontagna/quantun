import React, { FC } from 'react'
import { Title as TitleMantine } from '@mantine/core'

interface ITitleProps {
  children: React.ReactNode
}

export const Title: FC<ITitleProps> = ({ children }) => {
  return <TitleMantine order={2}>{children}</TitleMantine>
}
