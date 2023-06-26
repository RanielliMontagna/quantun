import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { QuantunProvider } from '@quantun/core'
import { RegisterScreen, IRegisterScreenProps } from '@quantun/register-screen'
import { Grid, Image, Text, Title } from '@mantine/core'

export default {
  title: 'Templates/Register',
  component: RegisterScreen,
  decorators: [
    (Story) => (
      <QuantunProvider theme={{}}>
        <Story />
      </QuantunProvider>
    ),
  ],
  args: {
    welcomeContent: (
      <>
        <Title>Quantun</Title>
        <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
          <Image
            style={{
              width: '80%',
              maxWidth: 350,
            }}
            src="https://images.unsplash.com/photo-1618412659753-9fcb22e8f515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neSxjb2RlfHx8fHx8MTY4NzgwMDYxNA&ixlib=rb-4.0.3&q=80&w=1080"
          />
        </Grid>
        <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
          <Title order={3}>O monorepo que vai mudar sua vida de desenvolvedor</Title>
          <Text size="md" color="gray.6">
            Junte-se a nós e descubra como é fácil criar aplicações incríveis!
          </Text>
        </Grid>
      </>
    ),
    beforeRegisterContent: (
      <>
        <Title order={3}>Cadastre-se</Title>
        <Text size="sm" color="gray.6">
          Preencha os campos abaixo para criar sua conta.
        </Text>
      </>
    ),
  },
} as Meta<IRegisterScreenProps>

export const Default: StoryObj<IRegisterScreenProps> = {
  args: {
    onRegister: (data) => console.log(data),
    onLogin: () => alert('Login'),
  },
}
