import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { EmptyState, QuantunProvider } from '@quantun/core'
import { Box, Center } from '@mantine/core'

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
} as Meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <QuantunProvider theme={{ primaryColor: 'blue' }}>
        <Box sx={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
          <Story />
        </Box>
      </QuantunProvider>
    ),
  ],
  render: () => {
    return (
      <Center
        style={{
          height: '100%',
        }}
      >
        <EmptyState>
          <EmptyState.Image src="https://source.unsplash.com/random" />
          <EmptyState.Title>Empty State</EmptyState.Title>
          <EmptyState.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </EmptyState.Text>
        </EmptyState>
      </Center>
    )
  },
}
