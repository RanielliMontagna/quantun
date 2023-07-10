import * as React from 'react'

import type { IBottomBarContext } from './context.types'

export const BottomBarContext = React.createContext({} as IBottomBarContext)

interface IBottomBarProviderProps {
  children: React.ReactNode
  highlightColor: string
}

export const BottomBarProvider: React.FC<IBottomBarProviderProps> = ({
  children,
  highlightColor,
}) => {
  const [items, setItems] = React.useState<React.ReactElement[]>([])
  const [hasMenu, setHasMenu] = React.useState(false)
  const [isMenuOpened, _setIsMenuOpened] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const onCloseMenu = () => {
    if (menuRef.current) menuRef.current.style.transform = 'translateY(100%)'

    setTimeout(() => _setIsMenuOpened(false), 300)
  }

  const toggleMenu = () => {
    if (isMenuOpened) onCloseMenu()
    else _setIsMenuOpened(true)
  }

  return (
    <BottomBarContext.Provider
      value={{
        isMenuOpened,
        menuRef,
        items,
        hasMenu,
        highlightColor,
        toggleMenu,
        setItems,
        setHasMenu,
      }}
    >
      {children}
    </BottomBarContext.Provider>
  )
}

export const useBottomBarContext = () => {
  const context = React.useContext<IBottomBarContext>(BottomBarContext)

  if (!context) throw new Error('useBottomBarContext deve ser usado dentro de BottomBarProvider')

  return context
}
