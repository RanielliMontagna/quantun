export interface IAppBarMobileProps {
  /**
   * Será exibido no canto superior esquerdo do AppBarMobile e será usado como um link para a página inicial.
   *
   * @example
   * <AppBarMobile logo={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logo: React.ReactNode

  /**
   * Será usado no canto superior direito da drawer após abrir o menu.
   * Se não for fornecido, irá ser utilizado o logo padrão.
   *
   * @example
   * <AppBarMobile logoDrawer={<img src="https://mantine.dev/logo.svg" alt="Mantine logo" />} />
   */
  logoDrawer?: React.ReactNode

  /**
   * Items que serão exibidos na drawer após abrir o menu.
   *
   * @example
   * <AppBarMobile items={[
   * <Link href="/docs/getting-started/installation" key="docs">Tutoriais</Link>,
   * ]} />
   */
  items: React.ReactNode
}
