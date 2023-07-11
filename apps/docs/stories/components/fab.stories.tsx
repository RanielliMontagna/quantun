import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { BottomBar, Fab, QuantunProvider } from '@quantun/core'
import { Flex, Text, useMantineTheme } from '@mantine/core'
import { IconTestPipe } from '@tabler/icons-react'

export default {
  title: 'Components/Fab',
  component: Fab.Root,
} as Meta

const Decorator = (Story: any, theme: 'dark' | 'light') => (
  <QuantunProvider theme={{ primaryColor: 'indigo', colorScheme: theme }}>
    <BottomBar>
      {new Array(4).fill(0).map((_, index) => (
        <BottomBar.Item key={index} icon={IconTestPipe} onPress={() => {}}>
          Example
        </BottomBar.Item>
      ))}
    </BottomBar>
    <Flex
      h="100vh"
      w="100vw"
      sx={({ colorScheme, colors }) => ({
        backgroundColor: colorScheme === 'dark' ? colors.dark[7] : colors.gray[1],
      })}
    >
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum</Text>
      <Story />
    </Flex>
  </QuantunProvider>
)

export const Light: StoryObj = {
  decorators: [(Story: any) => Decorator(Story, 'light')],
  render: () => {
    const { colors } = useMantineTheme()

    return (
      <Fab.Root highlightColor={colors.green[6]}>
        <Fab.Button label="Add expense" onPress={() => {}} />
        <Fab.Button label="Add income" onPress={() => {}} />
      </Fab.Root>
    )
  },
}

export const Dark: StoryObj = {
  decorators: [(Story: any) => Decorator(Story, 'dark')],
  render: () => {
    const { colors } = useMantineTheme()

    return (
      <Fab.Root highlightColor={colors.indigo[6]}>
        <Fab.Button label="Add expense" onPress={() => {}} />
        <Fab.Button label="Add income" onPress={() => {}} />
      </Fab.Root>
    )
  },
}

export const OneButton: StoryObj = {
  decorators: [(Story: any) => Decorator(Story, 'dark')],
  render: () => {
    const { colors } = useMantineTheme()

    return (
      <Fab.Root highlightColor={colors.indigo[6]}>
        <Fab.Button label="Add expense" onPress={() => console.log('teste')} />
      </Fab.Root>
    )
  },
}
