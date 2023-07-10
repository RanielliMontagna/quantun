import styled from '@emotion/styled'

interface BottomBarContainerProps {
  menuopen: boolean
}

export const BottomBarContainer = styled.nav<BottomBarContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 101;

  height: 75px;

  background: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return `linear-gradient(180deg, ${theme.colors.dark[6]} 0%, ${theme.colors.dark[7]} 100%)`
    } else {
      return `linear-gradient(180deg, ${theme.white} 0%, ${theme.colors.gray[1]} 100%)`
    }
  }};

  border-top: 1px solid
    ${({ theme }) => {
      if (theme.colorScheme === 'dark') {
        return theme.colors.dark[5]
      } else {
        return theme.colors.gray[3]
      }
    }};

  box-shadow: ${({ theme }) =>
    theme.colorScheme === 'dark'
      ? `0px -2px 6px ${theme.colors.dark[8]}`
      : `0px -2px 6px ${theme.colors.gray[3]}`};
`

export const BottomBarItemsContainer = styled.div`
  display: flex;
  height: 100%;
  overflow-x: auto;
`
