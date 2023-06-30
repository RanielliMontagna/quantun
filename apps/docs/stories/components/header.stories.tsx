import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Header, QuantunProvider } from '@quantun/core'
import { Box } from '@mantine/core'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <QuantunProvider theme={{ primaryColor: 'blue' }}>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5', padding: 32 }}>
          <Story />
        </Box>
      </QuantunProvider>
    ),
  ],
  render: () => {
    return (
      <Header>
        <Header.Title>Empty State</Header.Title>
        <Header.Subtitle>Lorem ipsum dolor sit amet consectetur.</Header.Subtitle>
        <Header.RightSection>Right Section</Header.RightSection>
      </Header>
    )
  },
}
