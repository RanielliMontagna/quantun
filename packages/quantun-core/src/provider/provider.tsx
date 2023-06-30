import * as React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import type { IQuantunProviderProps } from './provider.types'
import { ModalsProvider } from '@mantine/modals'

export function QuantunProvider({ children, theme, notificationsProps }: IQuantunProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <ModalsProvider>
        <Notifications position="top-right" limit={3} {...notificationsProps} />
        {children}
      </ModalsProvider>
    </MantineProvider>
  )
}

QuantunProvider.displayName = 'QuantunProvider'
