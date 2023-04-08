import * as React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { QuantunProvider, IQuantunProviderProps } from '@quantun/core'

export default {
  title: 'Components/QuantunProvider',
  component: QuantunProvider,
} as Meta<IQuantunProviderProps>

export const Default: StoryObj<IQuantunProviderProps> = {
  args: {
    children: <div>QuantunProvider</div>,
  },
}
