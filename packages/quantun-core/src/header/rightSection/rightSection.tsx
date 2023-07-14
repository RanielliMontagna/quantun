import React, { FC } from 'react'
import { Flex, FlexProps } from '@mantine/core'

interface IRightSectionProps extends FlexProps {}

export const RightSection: FC<IRightSectionProps> = ({ children, ...rest }) => {
  return (
    <Flex gap={16} {...rest}>
      {children}
    </Flex>
  )
}
