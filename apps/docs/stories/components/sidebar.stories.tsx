import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Sidebar, ISideBarProps, QuantunProvider } from '@quantun/core'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta<ISideBarProps>

export const Default: StoryObj<ISideBarProps> = {
  decorators: [
    (Story) => (
      <QuantunProvider
        theme={{
          primaryColor: 'blue',
        }}
      >
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
          <Story />
        </div>
      </QuantunProvider>
    ),
  ],
  args: {
    logo: <div>Logo</div>,
    items: [
      {
        icon: <div>🏠</div>,
        label: 'Home',
        path: '/iframe.html',
        onClick: () => console.log('Home'),
      },
      {
        icon: <div>📉</div>,
        label: 'History',
        path: '/history',
        onClick: () => console.log('History'),
      },
      {
        icon: <div>📊</div>,
        label: 'Reports',
        path: '/reports',
        onClick: () => console.log('Reports'),
      },
    ],
    footer: <div>Footer</div>,
  },
}
