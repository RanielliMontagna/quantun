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
  initialValues,
  onLogin,
  onRegister,
}: ILoginScreenProps) {
  const _loginTypeRender = useMemo(() => {
    switch (loginType) {
      case LoginTypeEnum.GOOGLE:
        return <Google onLogin={onLogin} />
      case LoginTypeEnum.EMAIL:
        return <Email onLogin={onLogin} onRegister={onRegister} initialValues={initialValues} />
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
              By entering, you agree to our
              <br />
              <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </Text>
          </TermosContainer>
        )}
      </RightSide>
    </LoginContainer>
  )
}

LoginScreen.displayName = 'LoginScreen'
