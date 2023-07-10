import type { ItemProps } from '../../item/item.types'

export interface MenuItemProps extends Omit<ItemProps, 'selected'> {
  /**
   * If true, the menu item will be the last one in the menu
   * @default false
   *
   * @example
   * <MenuItem last />
   */
  last?: boolean

  /**
   * If true, the menu item will be selected
   * @default false
   *
   * @example
   * <MenuItem selected />
   */
  selected?: boolean
}
