export interface IAppBarProps {
  /**
   * It will be displayed in the top left corner of the AppBar and will be used as a link to the home page.
   *
   * @example
   * <AppBar logo={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logo: React.ReactNode

  /**
   * It will be used in the top right corner of the drawer after opening the menu. If not provided, the default logo will be used.
   *
   * @example
   * <AppBar logoDrawer={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logoDrawer?: React.ReactNode

  /**
   * Custom spaces that can be added to the AppBar.
   *
   * @example
   * <AppBar customSpace={<div>Custom space</div>} />
   */
  customSpace?: {
    /**
     * It will be displayed in the center of the AppBar.
     * @example
     * <AppBar customSpace={{ center: <div>Custom space</div> }} />
     */
    center?: React.ReactNode

    /**
     * Items that will be displayed in the drawer after opening the menu.
     * @example
     * <AppBar customSpace={{ right: <div>Custom space</div> }} />
     * @example
     * <AppBar customSpace={{ right: <Button>Custom button</Button> }} />
     */
    right?: React.ReactNode
  }

  /**
   * Items que serão exibidos na drawer após abrir o menu.
   *
   * @example
   * <AppBar items={[
   * <Link href="/docs/getting-started/installation" key="docs">Tutoriais</Link>,
   * ]} />
   */
  itemsDrawer?: React.ReactNode
}
