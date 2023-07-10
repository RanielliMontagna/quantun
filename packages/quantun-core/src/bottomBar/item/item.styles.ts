import styled from '@emotion/styled'
import { rem } from '@mantine/core'

interface ItemContainerProps {
  selected: boolean
  qtditems: number
  menu: boolean
  activecolor?: string
}

const getMinWidth = ({ qtditems, menu }: ItemContainerProps) => {
  if (menu) {
    return
  }

  if (qtditems > 4) {
    return `calc(100% / 4 - ${rem(10)})`
  }

  return `calc(100% / ${qtditems})`
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  flex: 1;
  min-width: ${getMinWidth};

  color: ${({ selected, activecolor, theme: { colors, colorScheme } }) => {
    if (selected) {
      return activecolor
    }

    if (colorScheme === 'dark') {
      return colors.dark[2]
    } else {
      return colors.gray[7]
    }
  }};

  transition: background-color 0.3s ease-in-out;
`
