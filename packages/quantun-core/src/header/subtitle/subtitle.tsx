import React, { FC } from 'react'
import { Text, TextProps } from '@mantine/core'

interface ISubtitleProps extends TextProps {}

export const Subtitle: FC<ISubtitleProps> = ({ children, ...rest }) => {
  return (
    <Text size="xs" color="gray.6" {...rest}>
      {children}
    </Text>
  )
}
