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
   * Espaço personalizado que pode ser utilizado entre o logo e os itens. Esse espaço só será exibido em telas web.
   *
   * @example
   * <AppBar customSpace={<div>Custom space</div>} />
   */
  customSpace?: React.ReactNode

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
