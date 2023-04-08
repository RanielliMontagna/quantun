import { MouseEventHandler } from 'react'

export interface ISideBarItem {
  /**
   * Label que será exibido no item do sidebar
   */
  label: string

  /**
   * Ícone que será exibido ao lado do label do item do sidebar
   */
  icon: React.ReactNode

  /**
   * Rota que o item está associado
   */
  path: string

  /**
   * Função que será executada ao clicar no item do sidebar
   * @param {MouseEventHandler<HTMLButtonElement>} event
   *
   * @example
   * <SideBar items={[
   * { label: 'Home', icon: <HomeIcon />, onClick: () => console.log('Home') },
   * ]} />
   */
  onClick?: MouseEventHandler<HTMLButtonElement>

  /**
   * Define se o item será exibido ou não no sidebar
   * @default true
   */
  hidden?: boolean
}

export interface ISideBarProps {
  /**
   * Logo do sistema que será exibido no canto superior esquerdo do sidebar
   *  e ao clicar no logo será redirecionado para a rota "/"
   *
   * @type {React.ReactNode}
   * @memberof ISideBarProps
   *
   * @example
   * <SideBar logo={<img src="logo.png" alt="Logo" />} />
   */
  logo: React.ReactNode

  /**
   * Lista de itens que serão exibidos no sidebar
   * e ao clicar no item será redirecionado para a rota informada
   *
   * @type {ISideBarItem[]}
   * @memberof ISideBarProps
   *
   * @example
   * <SideBar items={[
   * { label: 'Home', icon: <HomeIcon />, route: '/' },
   * { label: 'About', icon: <AboutIcon />, route: '/about' },
   * ]} />
   */
  items: ISideBarItem[]

  /**
   * Espaço inferior da sidebar que pode ser utilizado para exibir informações adicionais
   *
   * @type {React.ReactNode}
   *
   * @example
   * <SideBar footer={<div>Footer</div>} />
   */
  footer?: React.ReactNode
}
