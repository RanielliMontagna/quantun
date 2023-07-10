import React from 'react'
import { Flex, Text, useMantineTheme } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'

import type { MenuItemProps } from './menuItem.types'
import { MenuItemChevronContainer, MenuItemContainer } from './menuItem.styles'

import { useBottomBarContext } from '../../context/context'

const MenuItem: React.FC<MenuItemProps> = ({
  icon: Icon,
  children,
  last,
  onPress,
  activecolor,
}) => {
  const { colors } = useMantineTheme()
  const { toggleMenu } = useBottomBarContext()

  const onPressItem = (event: React.MouseEvent<HTMLDivElement>) => {
    onPress(event)

    toggleMenu()
  }

  return (
    <MenuItemContainer
      onClick={onPressItem}
      showDivider={last !== children}
      activecolor={activecolor || colors.blue[6]}
    >
      <Flex gap="xs" align="center">
        <Icon size={20} />
        <Text>{children}</Text>
      </Flex>

      <MenuItemChevronContainer activecolor={activecolor || colors.blue[6]}>
        <IconChevronRight size={24} />
      </MenuItemChevronContainer>
    </MenuItemContainer>
  )
}

export default MenuItem
