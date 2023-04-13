import React from 'react'
import { Box, Burger, Divider, Drawer, Group, Header } from '@mantine/core'

import { useStyles } from './appBar.styles'
import type { IAppBarProps } from './appBar.types'
import { AppBarProvider, useAppBarContext } from './appBar.context'

function AppBar({ itemsDrawer, customSpace, logo, logoDrawer }: IAppBarProps) {
  const { theme } = useStyles()
  const { drawerOpened, toggleDrawer, closeDrawer } = useAppBarContext()

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          {logo}
          {customSpace}
          <div>{itemsDrawer && <Burger opened={drawerOpened} onClick={toggleDrawer} />}</div>
        </Group>
      </Header>

      {itemsDrawer && (
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title={logoDrawer || logo}
          zIndex={1000000}
        >
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          {itemsDrawer}
        </Drawer>
      )}
    </Box>
  )
}

function AppBarWrapper(props: IAppBarProps) {
  return (
    <AppBarProvider>
      <AppBar {...props} />
    </AppBarProvider>
  )
}

export { AppBarWrapper as AppBar }
