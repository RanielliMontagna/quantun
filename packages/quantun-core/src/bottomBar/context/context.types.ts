export interface IBottomBarContext {
  isMenuOpened: boolean
  toggleMenu: () => void
  menuRef: React.RefObject<HTMLDivElement>

  items: React.ReactElement[]
  setItems: React.Dispatch<React.SetStateAction<React.ReactElement[]>>

  hasMenu: boolean
  setHasMenu: React.Dispatch<React.SetStateAction<boolean>>

  /**
   * The highlight color of the bottom bar menu
   *
   * @default theme.colors.blue[6]
   */
  highlightColor: string
}
