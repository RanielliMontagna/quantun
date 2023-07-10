import React from 'react'

export interface BottomBarProps {
  children: React.ReactNode

  /**
   * The highlight color of the bottom bar menu
   *
   * @default theme.colors.blue[6]
   */
  highlightColor?: string
}
