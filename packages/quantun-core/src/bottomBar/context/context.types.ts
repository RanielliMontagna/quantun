export interface IBottomBarContext {
  isMenuOpened: boolean
  toggleMenu: () => void
  menuRef: React.RefObject<HTMLDivElement>

  items: React.ReactElement[]
  setItems: React.Dispatch<React.SetStateAction<React.ReactElement[]>>

  hasMenu: boolean
  setHasMenu: React.Dispatch<React.SetStateAction<boolean>>
}
