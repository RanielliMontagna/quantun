import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { BottomBar, QuantunProvider } from '@quantun/core'
import { Flex } from '@mantine/core'
import {
  IconBuildingBank,
  IconCategory,
  IconDashboard,
  IconKeyboardHide,
  IconLogout,
  IconSettings,
  IconTransferIn,
} from '@tabler/icons-react'

export default {
  title: 'Components/BottomBar',
  component: BottomBar,
} as Meta

const Decorator = (Story: any, theme: 'dark' | 'light') => (
  <QuantunProvider theme={{ primaryColor: 'indigo', colorScheme: theme }}>
    <Flex
      h="100vh"
      sx={({ colorScheme, colors }) => ({
        backgroundColor: colorScheme === 'dark' ? colors.dark[7] : colors.gray[1],
      })}
    >
      <Story />
    </Flex>
  </QuantunProvider>
)

const items = [
  {
    icon: IconDashboard,
    label: 'Dashboard',
    path: '/iframe.html',
    selected: true,
  },
  {
    icon: IconBuildingBank,
    label: 'Accounts',
    path: '/accounts',
  },
  {
    icon: IconTransferIn,
    label: 'Transactions',
    path: '/transactions',
  },
  {
    icon: IconCategory,
    label: 'Categories',
    path: '/categories',
  },
  {
    icon: IconSettings,
    label: 'Settings',
    path: '/settings',
    selected: true,
  },
  {
    icon: IconLogout,
    label: 'Logout',
  },
  {
    icon: IconKeyboardHide,
    label: 'Hide',
    path: '/hide',
    hide: true,
  },
]

export const Light: StoryObj = {
  decorators: [(Story) => Decorator(Story, 'light')],
  render: () => {
    return (
      <BottomBar highlightColor="red">
        {items.map((item) => (
          <BottomBar.Item
            key={item.label}
            icon={item.icon}
            onPress={() => console.log(item.label)}
            path={item.path}
            selected={item.selected}
            hide={item.hide}
          >
            {item.label}
          </BottomBar.Item>
        ))}
        <BottomBar.Menu header="User" />
      </BottomBar>
    )
  },
}

export const Dark: StoryObj = {
  decorators: [(Story) => Decorator(Story, 'dark')],
  render: () => {
    return (
      <BottomBar highlightColor="red">
        {items.map((item) => (
          <BottomBar.Item
            key={item.label}
            icon={item.icon}
            onPress={() => console.log(item.label)}
            path={item.path}
            selected={item.selected}
            hide={item.hide}
          >
            {item.label}
          </BottomBar.Item>
        ))}
        <BottomBar.Menu header="User" />
      </BottomBar>
    )
  },
}
