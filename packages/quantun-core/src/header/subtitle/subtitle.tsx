import React, { FC } from 'react'
import { Text } from '@mantine/core'

interface ISubtitleProps {
  children: React.ReactNode
}

export const Subtitle: FC<ISubtitleProps> = ({ children }) => {
  return (
    <Text size="xs" color="gray.6">
      {children}
    </Text>
  )
}
