import React, { useMemo } from 'react'

import { Text } from '@mantine/core'

import { ILoginScreenProps, LoginTypeEnum } from './loginScreen.types'
import { LeftSide, LoginContainer, RightSide, TermosContainer } from './loginScreen.styles'

import { Google } from './google/google'
import { Email } from './email/email'

export function LoginScreen({
  loginType = LoginTypeEnum.GOOGLE,
  showTerms = true,
  welcomeContent,
  beforeLoginContent,
  onLogin,
  onRegister,
}: ILoginScreenProps) {
  const _loginTypeRender = useMemo(() => {
    switch (loginType) {
      default:
      case LoginTypeEnum.GOOGLE:
        return <Google onLogin={onLogin} />
      case LoginTypeEnum.EMAIL:
        return <Email onLogin={onLogin} onRegister={onRegister} />
    }
  }, [loginType])

  return (
    <LoginContainer>
      {welcomeContent && <LeftSide>{welcomeContent}</LeftSide>}
      <RightSide>
        <div></div>
        <div>
          {beforeLoginContent && <div>{beforeLoginContent}</div>}
          <div>{_loginTypeRender}</div>
        </div>
        {showTerms && (
          <TermosContainer>
            <Text size="sm" color="gray.6">
              Ao entrar, você concorda com os nossos
              <br />
              <a href="/termos">Termos de Serviço</a> e{' '}
              <a href="/privacidade">Política de Privacidade</a>.
            </Text>
          </TermosContainer>
        )}
      </RightSide>
    </LoginContainer>
  )
}

LoginScreen.displayName = 'LoginScreen'
