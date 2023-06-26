import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { QuantunProvider } from '@quantun/core'
import { LoginScreen, ILoginScreenProps, LoginTypeEnum } from '@quantun/login-screen'
import { Grid, Image, Text, Title } from '@mantine/core'

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
          <Image src="https://images.unsplash.com/photo-1618412659753-9fcb22e8f515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neSxjb2RlfHx8fHx8MTY4NzgwMDYxNA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Grid>
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
          Para continuar, faça login e aproveite todos os recursos que temos para você.
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
    onRegister: () => alert('Register'),
  },
}
