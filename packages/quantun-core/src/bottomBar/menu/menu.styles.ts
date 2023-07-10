import styled from '@emotion/styled'

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  overflow: auto;

  width: 100%;
  height: calc(100% - 75px);

  background: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return `linear-gradient(180deg, ${theme.colors.dark[6]} 0%, ${theme.colors.dark[7]} 100%)`
    } else {
      return `linear-gradient(180deg, ${theme.white} 0%, ${theme.colors.gray[1]} 100%)`
    }
  }};

  transform: translateY(100%);
  transition: all 0.3s ease;
`

interface MenuHeaderContainerProps {
  highlightcolor?: string
}

export const MenuHeaderContainer = styled.div<MenuHeaderContainerProps>`
  display: flex;
  align-items: center;

  height: 50px;
  padding-left: 25px;
  border-radius: 0px 0px 8px 8px;

  background-color: ${({ theme, highlightcolor }) => highlightcolor || theme.primaryColor};
  color: ${({ theme }) => theme.white};
`
