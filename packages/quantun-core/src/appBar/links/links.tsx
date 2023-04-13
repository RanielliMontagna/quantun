import React from 'react'

import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { useStyles } from '../appBar.styles'

import type { ILinksAppBarProps } from './links.types'
import { useAppBarContext } from '../appBar.context'

export function LinkAppBar({ label, description, icon, onClick }: ILinksAppBarProps) {
  const { closeDrawer } = useAppBarContext()
  const { classes } = useStyles()

  return (
    <UnstyledButton
      className={classes.subLink}
      key={label}
      onClick={(e) => {
        e.preventDefault()
        onClick?.(e)
        closeDrawer?.()
      }}
    >
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
