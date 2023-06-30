import React from 'react'
import { StoryObj } from '@storybook/react'
import { usePrevious } from '@quantun/hooks'

export default {
  title: 'Hooks/usePrevious',
  component: usePrevious,
}

export const Default: StoryObj = {
  render: () => {
    const [count, setCount] = React.useState(0)
    const prevCount = usePrevious(count)

    return (
      <div>
        <p>Now: {count}</p>
        <p>Before: {prevCount}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
  },
}
