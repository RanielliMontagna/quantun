import { LoginData } from './email/email.schema'

export enum LoginTypeEnum {
  GOOGLE = 0,
  EMAIL = 1,
}

export interface ILoginScreenProps {
  /**
   * @description
   * The type of login to be displayed on the login screen.
   *
   * @default LoginType.GOOGLE
   * By default, the component will display the Google login button.
   *
   * @example
   * <LoginScreen loginType={LoginTypeEnum.GOOGLE} />
   */
  loginType?: LoginTypeEnum

  /**
   * @description
   * When **true**, the component will display a text to show the terms of service and privacy policy
   * Clicking on "Terms of Service" will redirect to '/terms', and clicking on "Privacy Policy" will redirect to '/privacy'.
   *
   * @default true
   * By default, the component will display the text.
   *
   * @example
   * <LoginScreen showTerms={false} />
   */
  showTerms?: boolean

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
   * Content that will be displayed on the right side of the screen. It will be displayed before the login button.
   *
   * @type React.ReactNode
   *
   * @example
   * <LoginScreen beforeLoginContent={<h1>Login</h1>} />
   */
  beforeLoginContent?: React.ReactNode

  /**
   * @description
   * Function to be executed when the user clicks on the login button.
   * @example
   * <LoginScreen onLogin={() => console.log('Login successful!')} />
   */
  onLogin: (values?: any) => void

  /**
   * @description
   * Function to be executed when the user clicks on the register button.
   * If not provided, the register button will not be displayed.
   * If the loginType is LoginTypeEnum.GOOGLE, the register button will not be displayed.
   *
   * @example
   * <LoginScreen onRegister={() => console.log('Register successful!')} />
   */
  onRegister?: () => void

  /**
   * @description
   * Initial values to be displayed on the login form. If not provided, the form will be empty.
   * This prop is only used when the loginType is LoginTypeEnum.EMAIL.
   */
  initialValues?: Partial<LoginData>
}
