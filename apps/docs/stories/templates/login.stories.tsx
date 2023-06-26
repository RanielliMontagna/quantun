import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { QuantunProvider } from '@quantun/core'
import { LoginScreen, ILoginScreenProps, LoginTypeEnum } from '@quantun/login-screen'
import { Grid, Text, Title } from '@mantine/core'

export default {
  title: 'Templates/Login',
  component: LoginScreen,
  decorators: [
    (Story) => (
      <QuantunProvider theme={{}}>
        <Story />
      </QuantunProvider>
    ),
  ],
  args: {
    loginType: LoginTypeEnum.GOOGLE,
    welcomeContent: (
      <>
        <Title>Quantun</Title>
        <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
          <Title order={3}>O monorepo que vai mudar sua vida de desenvolvedor</Title>
          <Text size="md" color="gray.6">
            Junte-se a nós e descubra como é fácil criar aplicações incríveis!
          </Text>
        </Grid>
      </>
    ),
    beforeLoginContent: (
      <>
        <Title order={3}>Bem vindo ao Quantun!</Title>
        <Text size="sm" color="gray.6">
          Para continuar, faça login com sua conta do Google.
        </Text>
      </>
    ),
  },
} as Meta<ILoginScreenProps>

export const Google: StoryObj<ILoginScreenProps> = {
  args: {
    loginType: LoginTypeEnum.GOOGLE,
    onLogin: () => console.log('Login'),
  },
}

export const Email: StoryObj<ILoginScreenProps> = {
  args: {
    loginType: LoginTypeEnum.EMAIL,
    onLogin: (values) => console.log('Login', values),
  },
}
