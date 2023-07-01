import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Sidebar, ISidebarRootProps, QuantunProvider } from '@quantun/core'
import {
  IconBuildingBank,
  IconCategory,
  IconDashboard,
  IconKeyboardHide,
  IconLogout,
  IconPolygon,
  IconSunMoon,
  IconTransferIn,
} from '@tabler/icons-react'
import { Center, Text } from '@mantine/core'

export default {
  title: 'Components/Sidebar',
  component: Sidebar.Root,
} as Meta<ISidebarRootProps>

const Decorator = (Story: any, theme: 'dark' | 'light') => (
  <QuantunProvider theme={{ primaryColor: 'indigo', colorScheme: theme }}>
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme === 'dark' ? '#1A1B1E' : '#F1F3F5',
      }}
    >
      <Story />
    </div>
  </QuantunProvider>
)

const rotas = [
  {
    icon: IconDashboard,
    label: 'Dashboard',
    path: '/iframe.html',
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
    icon: IconKeyboardHide,
    label: 'Hide',
    path: '/hide',
    hide: true,
  },
]

const footerItems = [
  {
    icon: IconSunMoon,
    label: 'Change theme',
    onClick: () => console.info('change theme'),
  },
  {
    icon: IconLogout,
    label: 'Logout',
    onClick: () => console.info('logout'),
  },
  {
    icon: IconKeyboardHide,
    label: 'Hide',
    hide: true,
  },
]

export const Light: StoryObj<ISidebarRootProps> = {
  decorators: [(Story) => Decorator(Story, 'light')],
  render: () => {
    return (
      <Sidebar.Root>
        <Sidebar.Header>
          <Center w="40px" h="40px" sx={{ color: 'indigo' }}>
            <IconPolygon />
          </Center>
          <Text size="lg" color="black">
            Quantun
          </Text>
        </Sidebar.Header>
        {rotas?.map(({ icon, label, path, hide }) => (
          <Sidebar.Item
            key={path}
            icon={icon}
            label={label}
            path={path}
            hide={hide}
            onClick={() => console.info('click', path)}
            activecolor="red"
          />
        ))}
        {footerItems?.map(({ icon, label, onClick, hide }) => (
          <Sidebar.FooterItem key={label} icon={icon} label={label} onClick={onClick} hide={hide} />
        ))}
      </Sidebar.Root>
    )
  },
}

export const Dark: StoryObj<ISidebarRootProps> = {
  decorators: [(Story) => Decorator(Story, 'dark')],
  render: () => {
    return (
      <Sidebar.Root>
        <Sidebar.Header>
          <Center w="40px" h="40px" sx={{ color: 'cyan' }}>
            <IconPolygon />
          </Center>
          <Text size="lg" color="white">
            Quantun
          </Text>
        </Sidebar.Header>
        {rotas?.map(({ icon, label, path, hide }) => (
          <Sidebar.Item
            key={path}
            icon={icon}
            label={label}
            path={path}
            hide={hide}
            onClick={() => console.info('click', path)}
          />
        ))}
        {footerItems?.map(({ icon, label, onClick, hide }) => (
          <Sidebar.FooterItem key={label} icon={icon} label={label} onClick={onClick} hide={hide} />
        ))}
      </Sidebar.Root>
    )
  },
}
