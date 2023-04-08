import * as React from 'react'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import type { IQuantunProviderProps } from './provider.types'

export function QuantunProvider({ children, theme, notificationsProps }: IQuantunProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Notifications position="top-right" limit={3} {...notificationsProps} />
      {children}
    </MantineProvider>
  )
}

QuantunProvider.displayName = 'QuantunProvider'
