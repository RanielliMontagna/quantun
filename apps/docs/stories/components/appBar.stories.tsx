import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { AppBar, IAppBarProps, LinkAppBar, QuantunProvider, useAppBarStyles } from '@quantun/core'
import { Box, Center, Collapse, UnstyledButton, Divider, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta<IAppBarProps>

export const Default: StoryObj<IAppBarProps> = {
  decorators: [
    (Story) => (
      <QuantunProvider
        theme={{
          primaryColor: 'blue',
        }}
      >
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
          <Story />
        </Box>
      </QuantunProvider>
    ),
  ],
  render: () => {
    const { classes } = useAppBarStyles()
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(true)

    return (
      <AppBar
        logo={<h1>logo</h1>}
        logoDrawer="drawer"
        customSpace={{
          center: (
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <a href="" className={classes.link} onClick={(e) => e.preventDefault()}>
                Home
              </a>
              <a href="" className={classes.link} onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
              <a href="" className={classes.link} onClick={(e) => e.preventDefault()}>
                Polity of Privacy
              </a>
            </Group>
          ),
        }}
        itemsDrawer={
          <>
            <LinkAppBar label="Home" icon="H" onClick={() => console.log('Home')} />
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>
              <LinkAppBar
                icon="L1"
                label="Link 1"
                description="Description 1"
                onClick={() => console.log('Link 1')}
              />
            </Collapse>
            <Divider my="sm" />
            <LinkAppBar
              label="Link 1"
              description="Description 1"
              onClick={() => console.log('Link 1')}
            />
          </>
        }
      />
    )
  },
}
