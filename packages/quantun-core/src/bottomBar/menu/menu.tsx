import React from 'react'

import { MenuContainer, MenuHeaderContainer } from './menu.styles'
import type { MenuProps } from './menu.types'

import { useBottomBarContext } from '../context/context'
import MenuItem from './menuItem/menuItem'

export function Menu({ header }: MenuProps) {
  const { items, menuRef, highlightColor } = useBottomBarContext()

  React.useEffect(() => {
    setTimeout(() => {
      if (menuRef.current) menuRef.current.style.transform = 'translateY(0%)'
    }, 30)
  }, [])

  return (
    <MenuContainer ref={menuRef}>
      <MenuHeaderContainer highlightcolor={highlightColor}>{header}</MenuHeaderContainer>
      <nav>
        {items.slice(3).map((item, index) => {
          return (
            <MenuItem
              key={index}
              icon={item.props.icon}
              onPress={item.props.onPress}
              path={item.props.path}
              selected={item.props.selected}
            >
              {item.props.children}
            </MenuItem>
          )
        })}
      </nav>
    </MenuContainer>
  )
}
