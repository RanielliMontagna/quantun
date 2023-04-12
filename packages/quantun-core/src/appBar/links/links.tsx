import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { useStyles } from '../appBar.styles'

import type { ILinksAppBarProps } from './links.types'

export function LinkAppBar({ label, description, icon, onClick }: ILinksAppBarProps) {
  const { classes } = useStyles()

  return (
    <UnstyledButton className={classes.subLink} key={label} onClick={onClick}>
      <Group noWrap align="flex-start">
        {icon && (
          <ThemeIcon size={34} variant="default" radius="md">
            {icon}
          </ThemeIcon>
        )}
        <div>
          <Text size="sm" fw={500}>
            {label}
          </Text>
          {description && (
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          )}
        </div>
      </Group>
    </UnstyledButton>
  )
}
