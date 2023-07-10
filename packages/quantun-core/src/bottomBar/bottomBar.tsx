import React from 'react'

import type { BottomBarProps } from './bottomBar.types'
import { BottomBarContainer, BottomBarItemsContainer } from './bottomBar.styles'

import { IconMenu2 } from '@tabler/icons-react'

import { Item } from './item/item'
import { Menu } from './menu/menu'

import { BottomBarProvider, useBottomBarContext } from './context/context'
import { useMantineTheme } from '@mantine/core'

const BottomBarWithoutMemo: React.FC<BottomBarProps> = ({ children }) => {
  const { isMenuOpened, toggleMenu, setItems, setHasMenu } = useBottomBarContext()

  // Necessáro fazer isso para que consiga ser passado array de children para o componente
  const allChildren = React.useMemo(
    () => React.Children.toArray(children),
    [children],
  ) as React.ReactElement[]

  const items = React.useMemo(
    () => allChildren.filter((child) => child.type === Item),
    [children],
  ).filter((item) => !item.props.hide)
  const menu = React.useMemo(() => allChildren.find((child) => child.type === Menu), [children])

  React.useEffect(() => {
    setItems(items)
    if (menu) setHasMenu(true)
  }, [isMenuOpened])

  return (
    <>
      <BottomBarContainer menuopen={isMenuOpened}>
        <BottomBarItemsContainer>
          {menu ? items.slice(0, 3) : items}

          {!!menu && (
            <Item icon={IconMenu2} onPress={toggleMenu}>
              Menu
            </Item>
          )}
        </BottomBarItemsContainer>
      </BottomBarContainer>
      {isMenuOpened && menu}
    </>
  )
}

const BottomBarWrapper: React.FC<BottomBarProps> = (props) => {
  const { colors } = useMantineTheme()

  return (
    <BottomBarProvider highlightColor={props.highlightColor || colors.blue[6]}>
      <BottomBarWithoutMemo {...props} />
    </BottomBarProvider>
  )
}

const BottomBar = BottomBarWrapper as React.NamedExoticComponent<BottomBarProps> & {
  Item: React.ComponentType<React.ComponentProps<typeof Item>>
  Menu: React.ComponentType<React.ComponentProps<typeof Menu>>
}

BottomBar.Item = Item
BottomBar.Menu = Menu

BottomBar.displayName = 'BottomBar'

export { BottomBar }
