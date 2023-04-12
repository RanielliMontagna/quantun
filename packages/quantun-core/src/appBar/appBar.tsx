import React from 'react'
import { Box, Burger, Divider, Drawer, Group, Header } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useStyles } from './appBar.styles'
import type { IAppBarProps } from './appBar.types'

export function AppBar({ items, logo, logoDrawer }: IAppBarProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { theme } = useStyles()

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          {logo}
          <Burger opened={drawerOpened} onClick={toggleDrawer} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={logoDrawer || logo}
        zIndex={1000000}
      >
        <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
        {items}
      </Drawer>
    </Box>
  )
}
