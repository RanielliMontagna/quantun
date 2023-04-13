export interface ILinksAppBarProps {
  /**
   * Label do link.
   *
   * @example
   * <LinkAppBar label="Tutoriais" />
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
   * <LinkAppBar description="Veja como instalar o Mantine" />
   */
  description?: string

  /**
   * Função que será executada ao clicar no link.
   *
   * @example
   * <LinkAppBar onClick={() => console.log('Clicou no link')} />
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>

  /**
   * Estilos customizados que serão aplicados no link.
   *
   * @example
   * <LinkAppBar styles={{ backgroundColor: 'red' }} />
   */
  styles?: React.CSSProperties
}
