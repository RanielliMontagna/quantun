import React from 'react'

import { Center, Flex, Text, Tooltip } from '@mantine/core'

import type { ISidebarFooterItemProps } from '../sidebar.types'
import { useSidebar } from '../sidebar.context'
import { FooterItemContainer } from './footerItem.styles'

export function SidebarFooterItem({ icon: Icon, label, onClick, hide }: ISidebarFooterItemProps) {
  const { expanded } = useSidebar()

  if (hide) return null

  return (
    <Tooltip label={label} position="right" withArrow disabled={expanded}>
      <FooterItemContainer onClick={onClick} expanded={expanded}>
        <Flex align="center">
          <Center className="iconButton">
            <Icon size={20} />
          </Center>
          <Text size="sm" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            {label}
          </Text>
        </Flex>
      </FooterItemContainer>
    </Tooltip>
  )
}
