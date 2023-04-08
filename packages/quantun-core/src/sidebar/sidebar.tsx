import React from 'react'
import { Center, Navbar, Stack } from '@mantine/core'

import type { ISideBarProps } from './sidebar.types'
import { ItemSidebar } from './items/items'

export function Sidebar({ logo, items, footer }: ISideBarProps) {
  const pathname = window.location.pathname

  console.log(pathname)

  const links = items.map((item) => (
    <ItemSidebar key={item.label} {...item} active={pathname === item.path} />
  ))

  return (
    <Navbar
      height="100%"
      width={{ base: 80 }}
      p="md"
      sx={({ fn, primaryColor }) => ({
        backgroundColor: fn.variant({
          variant: 'filled',
          color: primaryColor,
        }).background,
        border: 'none',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      })}
    >
      <Center>{logo}</Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" style={{ gap: 8 }}>
          {links}
        </Stack>
      </Navbar.Section>
      {footer}
    </Navbar>
  )
}

Sidebar.displayName = 'Sidebar'
