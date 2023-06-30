import React, { FC } from 'react'
import { Flex } from '@mantine/core'

interface IRightSectionProps {
  children: React.ReactNode
}

export const RightSection: FC<IRightSectionProps> = ({ children }) => {
  return <Flex gap={16}>{children}</Flex>
}
