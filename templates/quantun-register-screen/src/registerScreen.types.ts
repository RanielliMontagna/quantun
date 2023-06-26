import type { RegisterData } from './registerSchema'

export interface IRegisterScreenProps {
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
   * Conteúdo que será exibido no lado direito da tela. Será exibido antes dos campos de registro.
   *
   * @type React.ReactNode
   *
   * @example
   * <RegisterScreen beforeRegisterContent={<h1>Olá, seja bem vindo!</h1>} />
   */
  beforeRegisterContent?: React.ReactNode

  /**
   * Função que será executada quando o usuário clicar no botão de registro.
   * @param data Dados do formulário de registro.
   *
   * @example
   * <RegisterScreen onRegister={(data) => console.log(data)} />
   */
  onRegister: (data: RegisterData) => void
}
