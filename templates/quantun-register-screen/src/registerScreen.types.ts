import type { RegisterData } from './registerSchema'

export interface IRegisterScreenProps {
  /**
   * @description
   * Content that will be displayed as a welcome to the user. It will be displayed on the left side of the screen.
   *
   * @type React.ReactNode
   *
   * @example
   * <LoginScreen welcomeContent={<h1>Hello, welcome!</h1>} />
   */
  welcomeContent?: React.ReactNode

  /**
   * Content that will be displayed on the right side of the screen. It will be displayed before the registration fields.
   *
   * @type React.ReactNode
   *
   * @example
   * <RegisterScreen beforeRegisterContent={<h1>Register</h1>} />
   */
  beforeRegisterContent?: React.ReactNode

  /**
   * Function to be executed when the user clicks on the register button.
   * @param data - Data entered by the user in the registration fields.
   *
   * @example
   * <RegisterScreen onRegister={(data) => console.log(data)} />
   */
  onRegister: (data: RegisterData) => void

  /**
   * Function to be executed when the user clicks on the login button.
   *
   * @example
   * <RegisterScreen onLogin={() => navigate('/login')} />
   */
  onLogin: () => void
}
