import React, { FC, ReactNode } from 'react'
import { Text as TextMantine } from '@mantine/core'

interface ITextProps {
  children: string | ReactNode
}

export const Text: FC<ITextProps> = ({ children }) => {
  return <TextMantine size="sm">{children}</TextMantine>
}
