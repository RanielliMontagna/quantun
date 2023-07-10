export interface MenuProps {
  /**
   * Component that will be rendered inside the menu z
   *
   * @type {string}
   * @memberof MenuProps
   *
   * @example
   * <Menu header={<div>Header</div>}>
   */
  header: React.ReactNode

  /**
   * The color that will be used to highlight the menu.
   * @type {string}
   *
   * @memberof MenuProps
   * @default theme.primaryColor
   *
   * @example
   * <Menu highlightcolor="#000" />
   */
  highlightcolor?: string
}
