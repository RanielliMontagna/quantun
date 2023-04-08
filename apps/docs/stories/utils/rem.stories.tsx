import React from 'react'
import { StoryObj } from '@storybook/react'
import { rem } from '@quantun/utils'

export default {
  title: 'Utils/Rem',
  component: rem,
}

export const Default: StoryObj = {
  render: () => (
    <div>
      <div style={{ fontSize: rem(16) }}>16px</div>
      <div style={{ fontSize: rem(18) }}>18px</div>
      <div style={{ fontSize: rem(20) }}>20px</div>
      <div style={{ fontSize: rem(22) }}>22px</div>
    </div>
  ),
}
