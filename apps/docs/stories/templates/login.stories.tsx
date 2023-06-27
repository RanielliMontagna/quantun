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
          <Image
            style={{
              width: '80%',
              maxWidth: 350,
            }}
            src="https://images.unsplash.com/photo-1618412659753-9fcb22e8f515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neSxjb2RlfHx8fHx8MTY4NzgwMDYxNA&ixlib=rb-4.0.3&q=80&w=1080"
          />
        </Grid>
        <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
          <Title order={3}>The monorepo that will change your developer life</Title>
          <Text size="md" color="gray.6">
            Join us and discover how easy it is to create amazing applications!
          </Text>
        </Grid>
      </>
    ),
    beforeLoginContent: (
      <>
        <Title order={3}>Welcome to Quantun!</Title>
        <Text size="sm" color="gray.6">
          To continue, login and enjoy all the features we have for you.
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
