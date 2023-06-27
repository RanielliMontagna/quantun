import React from 'react'

import { Button, Text } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import { ILoginScreenProps } from '../loginScreen.types'

interface IGoogleProps {
  onLogin: ILoginScreenProps['onLogin']
}

export function Google({ onLogin }: IGoogleProps) {
  return (
    <>
      <Button leftIcon={<IconBrandGoogle size="18" />} onClick={onLogin}>
        <Text size="sm">
          Sign in with <strong>Google</strong>
        </Text>
      </Button>
    </>
  )
}
