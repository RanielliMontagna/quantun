import React from 'react'

import { SidebarHeaderProps } from '../sidebar.types'
import { HeaderContainer } from './header.styles'

export function SidebarHeader({ children }: SidebarHeaderProps) {
  return <HeaderContainer>{children}</HeaderContainer>
}

SidebarHeader.displayName = 'SidebarHeader'
