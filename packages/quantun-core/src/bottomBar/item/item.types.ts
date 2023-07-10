import type { MouseEvent } from 'react'
import { TablerIconsProps } from '@tabler/icons-react'

export interface ItemProps {
  /**
   * Content that will be rendered inside the item.
   * @type {React.ReactNode}
   * @memberof ItemProps
   * @example
   * <Item>Home</Item>
   */
  children?: React.ReactNode

  /**
   * The icon that will be rendered inside the item.
   *
   * @type {PathSourceProps}
   * @memberof ItemProps
   * @example
   * <Item icon={lineHome} />
   **/
  icon: (props: TablerIconsProps) => JSX.Element

  /**
   * The path that will be used to navigate to the item.
   *
   * @type {string}
   * @memberof ItemProps
   *
   * @example
   * <Item path="/home" />
   */
  path?: string

  /**
   * If true, the item will be hidden.
   *
   * @type {boolean}
   * @memberof ItemProps
   * @default false
   *
   * @example
   * <Item hide />
   */
  hide?: boolean

  /**
   * If true, the item will be selected.
   *
   * @type {boolean}
   * @memberof ItemProps
   * @default false
   *
   * @example
   * <Item selected />
   */
  selected?: boolean

  /**
   * Function that will be called when the item is clicked.
   * @type {function}
   * @memberof ItemProps
   *
   * @example
   * <Item onPress={() => console.log('Item clicado')} />
   */
  onPress: (event: MouseEvent<HTMLDivElement>) => void
}
