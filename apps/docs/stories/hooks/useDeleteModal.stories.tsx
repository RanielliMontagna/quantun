import React from 'react'
import { StoryObj } from '@storybook/react'

import { QuantunProvider } from '@quantun/core'
import { useDeleteModal } from '@quantun/hooks'

export default {
  title: 'Hooks/useDeleteModal',
  component: useDeleteModal,
  decorators: [
    (Story) => (
      <QuantunProvider theme={{}}>
        <Story />
      </QuantunProvider>
    ),
  ],
}

export const Default: StoryObj = {
  render: () => {
    const { openDeleteModal } = useDeleteModal({
      title: 'Delete account',
      labels: {
        confirm: 'Delete account',
      },
      text: 'Are you sure that you want to delete your account? This action is permanent and cannot be undone.',
      onConfirm: () => {
        alert('Account deleted')
      },
    })

    return (
      <div>
        <p>
          <button onClick={openDeleteModal}>Open modal</button>
        </p>
      </div>
    )
  },
}
