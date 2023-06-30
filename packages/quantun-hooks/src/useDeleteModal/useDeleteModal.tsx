import React from 'react'

import { Flex, Text as TextMantine } from '@mantine/core'
import { modals } from '@mantine/modals'
import { OpenConfirmModal } from '@mantine/modals/lib/context'

import { Text } from './text/text'
import { IconCircleX } from '@tabler/icons-react'

interface IDeleteModalProps extends Omit<OpenConfirmModal, 'children' | 'labels'> {
  text: string | React.ReactNode
  labels: {
    cancel?: string
    confirm: string
  }
}

export const useDeleteModal = ({ title, text, ...rest }: IDeleteModalProps) => {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      centered: true,
      confirmProps: { color: 'red' },
      ...rest,
      labels: {
        cancel: 'Cancel',
        ...rest.labels,
      },
      title: (
        <Flex gap="xs" align="center">
          <TextMantine color="red" size="lg" align="center" display="flex">
            <IconCircleX size={24} />
          </TextMantine>
          <strong>{title}</strong>
        </Flex>
      ),
      children: <Text>{text}</Text>,
    })

  return {
    openDeleteModal,
  }
}
