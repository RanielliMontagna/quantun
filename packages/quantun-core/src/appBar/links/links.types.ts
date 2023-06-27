export interface ILinksAppBarProps {
  /**
   * Link label.
   *
   * @example
   * <LinkAppBar label="Tutoriais" />
   */
  label: string

  /**
   * Icon that will be displayed next to the label.
   */
  icon?: React.ReactNode

  /**
   * Description that will be displayed below the label.
   *
   * @example
   * <LinkAppBar description="Veja como instalar o Mantine" />
   */
  description?: string

  /**
   * Function to be executed when the link is clicked.
   *
   * @example
   * <LinkAppBar onClick={() => console.log('Link clicked')} />
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>

  /**
   * Custom styles to be applied to the link.
   *
   * @example
   * <LinkAppBar styles={{ backgroundColor: 'red' }} />
   */
  styles?: React.CSSProperties
}
