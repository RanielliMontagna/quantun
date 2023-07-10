import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const MenuItemContainer = styled.div<{ showDivider: boolean; activecolor?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem(12)} ${rem(8)};
  margin-left: 15px;
  margin-right: 15px;

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

export const MenuItemChevronContainer = styled.span<{ activecolor?: string }>`
  color: ${({ activecolor }) => activecolor};
  display: flex;
  align-items: center;
`
