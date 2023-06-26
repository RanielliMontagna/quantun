import React from 'react'
import { z } from 'zod'

import { useForm, zodResolver } from '@mantine/form'
import { TextInput, Button, MantineProvider } from '@mantine/core'
import { ILoginScreenProps } from '../loginScreen.types'

interface IEmailProps {
  onLogin: ILoginScreenProps['onLogin']
  onRegister: ILoginScreenProps['onRegister']
}

const loginSchema = z.object({
  email: z.string().email('Informe um email válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export function Email({ onLogin, onRegister }: IEmailProps) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  })

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
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
        <Button type="submit" mt={8}>
          Entrar
        </Button>
        <Button variant="light" mt={8} style={{ fontWeight: 400 }} onClick={onRegister}>
          Não tem uma conta? Cadastre-se
        </Button>
      </form>
    </MantineProvider>
  )
}
