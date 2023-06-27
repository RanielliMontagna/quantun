import React from 'react'
import { z } from 'zod'

import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Button, MantineProvider, useMantineTheme } from '@mantine/core'
import { ILoginScreenProps } from '../loginScreen.types'

interface IEmailProps {
  onLogin: ILoginScreenProps['onLogin']
  onRegister: ILoginScreenProps['onRegister']
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export function Email({ onLogin, onRegister }: IEmailProps) {
  const theme = useMantineTheme()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
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
        onSubmit={form.onSubmit((values) => {
          onLogin(values)
        })}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <TextInput
          label="Email"
          placeholder="Enter your email"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <TextInput
          label="Senha"
          placeholder="Enter your password"
          type="password"
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
