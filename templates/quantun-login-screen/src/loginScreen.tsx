import React from 'react'

import { Button, Text } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

import { ILoginScreenProps, LoginTypeEnum } from './loginScreen.types'
import { LeftSide, LoginContainer, RightSide, TermosContainer } from './loginScreen.styles'

export function LoginScreen({
  loginType = LoginTypeEnum.GOOGLE,
  showTerms = true,
  welcomeContent,
  beforeLoginContent,
  onLogin,
}: ILoginScreenProps) {
  /**
   * TODO - Adicionar suporte a outros tipos de login (Facebook, Twitter, etc)
   */
  switch (loginType) {
    default:
    case LoginTypeEnum.GOOGLE:
      return (
        <LoginContainer>
          {welcomeContent && <LeftSide>{welcomeContent}</LeftSide>}
          <RightSide>
            <div></div>
            <div>
              {beforeLoginContent && <div>{beforeLoginContent}</div>}
              <div>
                <Button leftIcon={<IconBrandGoogle size="18" />} onClick={onLogin}>
                  <Text size="sm">Entrar com o Google</Text>
                </Button>
              </div>
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
}

LoginScreen.displayName = 'LoginScreen'
