import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AppBar, IAppBarProps, LinkAppBar, useAppBarStyles } from '@quantun/core'
import { Box, Center, Collapse, UnstyledButton, Divider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta<IAppBarProps>

export const Default: StoryObj<IAppBarProps> = {
  render: () => {
    const { classes } = useAppBarStyles()
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(true)

    return (
      <AppBar
        logo={<h1>logo</h1>}
        logoDrawer={<h2>drawer</h2>}
        items={
          <>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Funcionalidades
                </Box>
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>
              <LinkAppBar
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
