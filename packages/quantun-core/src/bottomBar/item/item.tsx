import React from 'react'
import { Text } from '@mantine/core'

import type { ItemProps } from './item.types'
import { ItemContainer } from './item.styles'

import { useBottomBarContext } from '../context/context'

export function Item({ icon: Icon, path, children, selected, onPress }: ItemProps) {
  const { items, isMenuOpened, toggleMenu, hasMenu, highlightColor } = useBottomBarContext()
  const _isMenuItem = children === 'Menu' // True se for o item que abre o menu

  const _onPress = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!getIsSelected() || _isMenuItem) onPress(event)

    if (isMenuOpened && !_isMenuItem) toggleMenu()
  }

  const getIsSelected = () => {
    if (selected) return true
    if (isMenuOpened) return _isMenuItem

    const treatedPath = window.location.pathname.replace(/[/#]/, '')

    return treatedPath === path
  }

  return (
    <ItemContainer
      selected={getIsSelected()}
      onClick={_onPress}
      qtditems={items?.length || 0}
      menu={hasMenu}
      activecolor={highlightColor}
    >
      <Icon size={24} />
      <Text size="xs">{children}</Text>
    </ItemContainer>
  )
}
