import React from 'react'

import { Stack } from '@mantine/core'
import { IconChevronsRight } from '@tabler/icons-react'

import type { ISidebarRootProps } from './sidebar.types'
import { ExpandButton, SidebarContainer } from './sidebar.styles'
import { SidebarProvider, useSidebar } from './sidebar.context'

import { SidebarHeader } from './header/header'
import { SidebarItem } from './item/item'
import { SidebarFooterItem } from './footerItem/footerItem'

function SidebarRoot({ children }: ISidebarRootProps) {
  const { expanded, handleToggleExpand } = useSidebar()

  const _childrenArray = React.Children.toArray(children)

  const _header = _childrenArray.find((child) => (child as any).type === SidebarHeader)
  const _items = _childrenArray.filter((child) => (child as any).type === SidebarItem)
  const _footerItems = _childrenArray.filter((child) => (child as any).type === SidebarFooterItem)

  return (
    <SidebarContainer expanded={expanded}>
      <ExpandButton expanded={expanded} onClick={handleToggleExpand}>
        <IconChevronsRight />
      </ExpandButton>
      {_header}
      <Stack spacing="xl">{_items}</Stack>
      <Stack spacing="xl">{_footerItems}</Stack>
    </SidebarContainer>
  )
}

function SidebarRootWrapper({ children }: ISidebarRootProps) {
  return (
    <SidebarProvider>
      <SidebarRoot>{children}</SidebarRoot>
    </SidebarProvider>
  )
}

export { SidebarRootWrapper as SidebarRoot }

SidebarRoot.displayName = 'Sidebar'
