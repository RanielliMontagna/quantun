import React from 'react'
import { StoryObj } from '@storybook/react'
import { useMediaQuery } from '@quantun/hooks'

export default {
  title: 'Hooks/useMediaQuery',
  component: useMediaQuery,
}

export const Default: StoryObj = {
  render: () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const [renderCount, setRenderCount] = React.useState(0)

    React.useEffect(() => {
      setRenderCount((prev) => prev + 1)
    }, [isMobile])

    return (
      <div>
        <p>Is mobile: {isMobile ? 'yes' : 'no'}</p>
        <p>Renders: {renderCount}</p>
      </div>
    )
  },
}
