export interface ILinksAppBarMobileProps {
  /**
   * Label do link.
   *
   * @example
   * <LinkAppBarMobile label="Tutoriais" />
   */
  label: string

  /**
   * Icone que será exibido ao lado do label.
   */
  icon?: React.ReactNode

  /**
   * Descrição que será exibido no link abaixo do label.
   *
   * @example
   * <LinkAppBarMobile description="Veja como instalar o Mantine" />
   */
  description?: string

  /**
   * Função que será executada ao clicar no link.
   *
   * @example
   * <LinkAppBarMobile onClick={() => console.log('Clicou no link')} />
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
