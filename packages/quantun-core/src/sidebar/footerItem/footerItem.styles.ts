import styled from '@emotion/styled'

interface IFooterItemContainerProps {
  expanded: boolean
}

export const FooterItemContainer = styled.div<IFooterItemContainerProps>`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
  }

  & > div:first-of-type {
    gap: ${({ expanded }) => (expanded ? '0rem' : '1rem')};

    transition: all 0.5s ease-in-out;

    color: ${({ theme: { colors, colorScheme } }) => {
      if (colorScheme === 'dark') {
        return colors.dark[2]
      } else {
        return colors.gray[7]
      }
    }};

    &:hover {
      > div {
        color: ${({ theme }) => {
          if (theme.colorScheme === 'dark') {
            return theme.white
          } else {
            return theme.black
          }
        }};

        transition: all 0.3s ease-in-out;
      }

      > div:first-of-type {
        transform: ${({ expanded }) => (expanded ? 'scale(1.0)' : 'scale(1.2)')};
      }
    }

    > div {
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
    }

    transition: all 0.3s ease-in-out;
  }

  .iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
