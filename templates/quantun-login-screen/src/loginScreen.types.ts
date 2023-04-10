export enum LoginTypeEnum {
  GOOGLE = 0,
}

export interface ILoginScreenProps {
  /**
   * @description
   * O tipo de login que será exibido na tela de login.
   *
   * @default LoginType.GOOGLE
   * Por padrão, o componente irá exibir o botão de login do Google.
   *
   * @example
   * <LoginScreen loginType={LoginTypeEnum.GOOGLE} />
   */
  loginType?: LoginTypeEnum

  /**
   * @description
   * Quando **true**, o componente irá exibir um texto para mostrar os termos de serviço e política de privacidade.
   * Ao clicar em Termos de Serviço irá redirecionar para '/termos' e ao clicar em Política de Privacidade irá redirecionar para '/privacidade'.
   *
   * @default true
   * Por padrão, o componente irá exibir o texto.
   *
   * @example
   * <LoginScreen showTerms={false} />
   */
  showTerms?: boolean

  /**
   * @description
   * Conteúdo que será exibido como boas vindas ao usuário. Será exibido no lado esquerdo da tela.
   *
   * @type React.ReactNode
   *
   * @example
   * <LoginScreen welcomeContent={<h1>Olá, seja bem vindo!</h1>} />
   */
  welcomeContent?: React.ReactNode

  /**
   * Conteúdo que será exibido no lado direito da tela. Será exibido antes do botão de login.
   *
   * @type React.ReactNode
   *
   * @example
   * <LoginScreen beforeLoginContent={<h1>Olá, seja bem vindo!</h1>} />
   */
  beforeLoginContent?: React.ReactNode

  /**
   * @description
   * Função que será executada quando o usuário clicar no botão de login.
   * @example
   * <LoginScreen onLogin={() => console.log('Login realizado com sucesso!')} />
   */
  onLogin: () => void
}
