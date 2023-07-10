import type { ItemProps } from '../../item/item.types'

export interface MenuItemProps extends Omit<ItemProps, 'selected'> {
  /**
   * Se o item é o último da lista de itens do menu.
   * @default false
   *
   * @example
   * <MenuItem last />
   */
  last?: boolean
}
