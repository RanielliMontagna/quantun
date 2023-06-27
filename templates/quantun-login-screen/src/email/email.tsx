import React from 'react'

import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Button, MantineProvider, useMantineTheme, PasswordInput } from '@mantine/core'

import type { ILoginScreenProps } from '../loginScreen.types'
import { LoginData, loginSchema } from './email.schema'

interface IEmailProps {
  onLogin: ILoginScreenProps['onLogin']
  onRegister: ILoginScreenProps['onRegister']
  initialValues?: Partial<LoginData>
}

export function Email({ onLogin, onRegister, initialValues }: IEmailProps) {
  const theme = useMantineTheme()
  const params = new URLSearchParams(window.location.search)

  const form = useForm({
    initialValues: {
      email: initialValues?.email || params.get('email') || '',
      password: initialValues?.password || params.get('password') || '',
    },
    validate: zodResolver(loginSchema),
  })

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        ...theme,
        colorScheme: 'light',
      }}
    >
      <form
        onSubmit={form.onSubmit(onLogin)}
        style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <TextInput
          label="Email"
          placeholder="Enter your email"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          withAsterisk
          {...form.getInputProps('password')}
        />
        <Button type="submit" mt={8}>
          Sign in
        </Button>
        <Button variant="light" mt={8} style={{ fontWeight: 400 }} onClick={onRegister}>
          Don&apos;t have an account? Sign up
        </Button>
      </form>
    </MantineProvider>
  )
}
