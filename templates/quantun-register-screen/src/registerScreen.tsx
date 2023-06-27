import React from 'react'

import { MantineProvider, Text, TextInput, Button, useMantineTheme } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'

import { LeftSide, RegisterContainer, RightSide, TermosContainer } from './registerScreen.styles'
import { IRegisterScreenProps } from './registerScreen.types'
import { registerSchema } from './registerSchema'

export function RegisterScreen({
  welcomeContent,
  beforeRegisterContent,
  onRegister,
  onLogin,
}: IRegisterScreenProps) {
  const theme = useMantineTheme()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(registerSchema),
  })

  return (
    <RegisterContainer>
      {welcomeContent && <LeftSide>{welcomeContent}</LeftSide>}
      <RightSide>
        <div>
          {beforeRegisterContent && <div>{beforeRegisterContent}</div>}
          <div>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                ...theme,
                colorScheme: 'light',
              }}
            >
              <form
                onSubmit={form.onSubmit(onRegister)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  withAsterisk
                  {...form.getInputProps('name')}
                />
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
                <TextInput
                  label="Confirm password"
                  placeholder="Confirm your password"
                  type="password"
                  withAsterisk
                  {...form.getInputProps('confirmPassword')}
                />
                <Button type="submit" fullWidth mt={8}>
                  Register now
                </Button>
                <Button
                  variant="light"
                  fullWidth
                  mt={8}
                  style={{ fontWeight: 400 }}
                  onClick={onLogin}
                >
                  Already have an account? <b style={{ marginLeft: 4 }}>Sign in</b>
                </Button>
              </form>
            </MantineProvider>
          </div>
        </div>
        <TermosContainer>
          <Text size="sm" color="gray.6">
            By registering, you agree to our
            <br />
            <a href="/terms">Terms of Service</a> e <a href="/privacy">Privacy Policy</a>.
          </Text>
        </TermosContainer>
      </RightSide>
    </RegisterContainer>
  )
}

RegisterScreen.displayName = 'RegisterScreen'
