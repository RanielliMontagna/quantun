import React from 'react'
import { Flex, Text } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

import type { MenuItemProps } from './menuItem.types'
import { MenuItemChevronContainer, MenuItemContainer } from './menuItem.styles'

import { useBottomBarContext } from '../../context/context'

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  last,
  path,
  selected,
  icon: Icon,
  onPress,
}) => {
  const { toggleMenu, highlightColor } = useBottomBarContext()

  const onPressItem = (event: React.MouseEvent<HTMLDivElement>) => {
    onPress(event)

    toggleMenu()
  }

  const getIsSelected = () => {
    if (selected) return true

    const treatedPath = window.location.pathname.replace(/[/#]/, '')

    return treatedPath === path
  }

  return (
    <MenuItemContainer
      onClick={onPressItem}
      showDivider={last !== children}
      activecolor={highlightColor}
      selected={getIsSelected()}
    >
      <Flex gap="xs" align="center">
        <Icon size={20} />
        <Text>{children}</Text>
      </Flex>

      {path && (
        <MenuItemChevronContainer activecolor={highlightColor} selected={getIsSelected()}>
          <IconChevronRight size={24} />
        </MenuItemChevronContainer>
      )}
    </MenuItemContainer>
  )
}

export default MenuItem
