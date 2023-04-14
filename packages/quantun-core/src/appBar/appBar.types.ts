export interface IAppBarProps {
  /**
   * Será exibido no canto superior esquerdo do AppBar e será usado como um link para a página inicial.
   *
   * @example
   * <AppBar logo={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logo: React.ReactNode

  /**
   * Será usado no canto superior direito da drawer após abrir o menu.
   * Se não for fornecido, irá ser utilizado o logo padrão.
   *
   * @example
   * <AppBar logoDrawer={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logoDrawer?: React.ReactNode

  /**
   * Espaços personalizados que podem serem adicionados ao AppBar.
   *
   * @example
   * <AppBar customSpace={<div>Custom space</div>} />
   */
  customSpace?: {
    /**
     * Será exibido no centro do AppBar.
     * @example
     * <AppBar customSpace={{ center: <div>Custom space</div> }} />
     */
    center?: React.ReactNode

    /**
     * Será exibido no canto superior direito do AppBar.
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
