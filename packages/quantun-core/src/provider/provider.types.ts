import type { MantineThemeOverride } from '@mantine/core'
import type { NotificationsProps } from '@mantine/notifications'

export interface IQuantunProviderProps {
  children: React.ReactNode
  theme: MantineThemeOverride
  notificationsProps?: NotificationsProps
}
