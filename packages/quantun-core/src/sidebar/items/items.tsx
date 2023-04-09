import React from 'react'
import { Tooltip, UnstyledButton } from '@mantine/core'

import type { ISideBarItem } from '../sidebar.types'
import { useStyles } from '../sidebar.styles'

interface IItemSidebarProps extends ISideBarItem {
  active?: boolean
}

export function ItemSidebar({ icon, label, active = true, onClick }: IItemSidebarProps) {
  const { classes, cx } = useStyles()

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        {icon}
      </UnstyledButton>
    </Tooltip>
  )
}
