import styled from '@emotion/styled'

interface IItemContainerProps {
  expanded: boolean
  active: boolean
  activecolor?: string
}

export const ItemContainer = styled.div<IItemContainerProps>`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  margin-left: 0.5rem;
  cursor: pointer;

  .chevron {
    transform: ${({ active }) => (active ? 'rotate(180deg) !important' : 'rotate(0deg)')};
    color: ${({ active, activecolor }) => (active ? activecolor : undefined)};
  }

  &:hover {
    .chevron {
      color: ${({ activecolor }) => activecolor};
      transform: ${({ active }) => (!active ? 'rotate(180deg) !important' : 'rotate(0deg)')};
      transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
  }

  & > div:first-of-type {
    gap: ${({ expanded }) => (expanded ? '0rem' : '1rem')};

    transition: all 0.5s ease-in-out;

    color: ${({ active, activecolor, theme: { colors, colorScheme } }) => {
      if (active) {
        return activecolor
      }

      if (colorScheme === 'dark') {
        return colors.dark[2]
      } else {
        return colors.gray[7]
      }
    }};

    &:hover {
      > div {
        color: ${({ active, theme }) => {
          if (active) return

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

  & > div:last-of-type {
    transform: ${({ expanded }) => (!expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.5s ease-in-out;
  }

  .iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
