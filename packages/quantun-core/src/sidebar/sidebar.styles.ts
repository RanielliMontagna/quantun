import styled from '@emotion/styled'
import { rem } from '@mantine/core'

interface IProps {
  expanded: boolean
}

export const SidebarContainer = styled.nav<IProps>`
  position: relative;

  user-select: none;
  -webkit-user-select: none;

  width: ${({ expanded }) => (expanded ? rem(200) : rem(70))};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: ${rem(16)} ${rem(8)};
  border-radius: 0 ${rem(8)} ${rem(8)} 0;

  transition: all 0.3s ease-in-out;

  box-shadow: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return `${rem(1)} 0 ${rem(1)} ${theme.colors.dark[8]}`
    } else {
      return `${rem(1)} 0 ${rem(1)} ${theme.colors.gray[3]}`
    }
  }};

  background: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return `linear-gradient(180deg, ${theme.colors.dark[6]} 0%, ${theme.colors.dark[7]} 100%)`
    } else {
      return `linear-gradient(180deg, ${theme.white} 0%, ${theme.colors.gray[1]} 100%)`
    }
  }};
`

export const ExpandButton = styled.button<IProps>`
  position: absolute;
  top: ${rem(64)};
  right: ${rem(-16)};

  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;

  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  padding: ${rem(8)};

  background: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return `linear-gradient(180deg, ${theme.colors.gray[4]} 0%, ${theme.colors.gray[1]} 100%)`
    } else {
      return `linear-gradient(180deg, ${theme.colors.dark[6]} 0%, ${theme.colors.dark[7]} 100%)`
    }
  }};

  color: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return theme.colors.dark[9]
    } else {
      return theme.colors.gray[0]
    }
  }};

  &:hover {
    transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')} scale(1.1);
  }
`
