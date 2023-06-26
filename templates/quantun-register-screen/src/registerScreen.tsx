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
                  label="Nome"
                  placeholder="Informe seu nome"
                  withAsterisk
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Informe seu email"
                  withAsterisk
                  {...form.getInputProps('email')}
                />
                <TextInput
                  label="Senha"
                  placeholder="Informe sua senha"
                  type="password"
                  withAsterisk
                  {...form.getInputProps('password')}
                />
                <TextInput
                  label="Confirme sua senha"
                  placeholder="Confirme sua senha"
                  type="password"
                  withAsterisk
                  {...form.getInputProps('confirmPassword')}
                />
                <Button type="submit" fullWidth mt={8}>
                  Cadastrar
                </Button>
                <Button
                  variant="light"
                  fullWidth
                  mt={8}
                  style={{ fontWeight: 400 }}
                  onClick={onLogin}
                >
                  Já possui uma conta? <b style={{ marginLeft: 4 }}>Faça login</b>
                </Button>
              </form>
            </MantineProvider>
          </div>
        </div>
        <TermosContainer>
          <Text size="sm" color="gray.6">
            Ao cadastrar, você concorda com os nossos
            <br />
            <a href="/termos">Termos de Serviço</a> e{' '}
            <a href="/privacidade">Política de Privacidade</a>.
          </Text>
        </TermosContainer>
      </RightSide>
    </RegisterContainer>
  )
}

RegisterScreen.displayName = 'RegisterScreen'
