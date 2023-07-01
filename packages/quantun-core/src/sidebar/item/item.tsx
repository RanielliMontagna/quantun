import React from 'react'

import { Center, Flex, Text, Tooltip, useMantineTheme } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

import type { ISidebarItemProps } from '../sidebar.types'
import { useSidebar } from '../sidebar.context'
import { ItemContainer } from './item.styles'

export function SidebarItem({
  icon: Icon,
  label,
  path,
  hide,
  activecolor,
  onClick,
}: ISidebarItemProps) {
  const { colors } = useMantineTheme()
  const { expanded } = useSidebar()

  if (hide) return null

  const pathname = window?.location?.pathname

  return (
    <Tooltip label={label} position="right" withArrow disabled={expanded}>
      <ItemContainer
        onClick={onClick}
        expanded={expanded}
        active={pathname === path}
        activecolor={activecolor || colors.blue[6]}
      >
        <Flex align="center">
          <Center className="iconButton">
            <Icon size={20} />
          </Center>
          <Text size="sm" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            {label}
          </Text>
        </Flex>
        <Flex align="center" className="chevron">
          <IconChevronRight size={18} />
        </Flex>
      </ItemContainer>
    </Tooltip>
  )
}
