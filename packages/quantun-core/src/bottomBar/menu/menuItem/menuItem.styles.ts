import styled from '@emotion/styled'
import { rem } from '@mantine/core'

interface MenuItemContainerProps {
  showDivider: boolean
  activecolor?: string
  selected?: boolean
}

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem(12)} ${rem(8)};
  margin-left: 15px;
  margin-right: 15px;

  color: ${({ activecolor, selected }) => selected && activecolor};

  border-bottom: ${({ showDivider, theme }) => {
    if (showDivider) {
      if (theme.colorScheme === 'dark') {
        return `1px solid ${theme.colors.gray[8]}`
      } else {
        return `1px solid ${theme.colors.gray[3]}`
      }
    } else {
      return 'none'
    }
  }};
`

export const MenuItemChevronContainer = styled.span<Omit<MenuItemContainerProps, 'showDivider'>>`
  color: ${({ activecolor }) => activecolor};
  display: flex;
  align-items: center;

  transform: ${({ selected }) => (selected ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`
