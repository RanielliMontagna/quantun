import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  color: ${({ theme }) => theme.white};

  > div {
    display: flex;
    flex-direction: column;
    padding: ${rem(32)} ${rem(64)};
    gap: ${rem(32)};

    @media (max-width: 768px) {
      padding: ${rem(32)} ${rem(32)};
    }

    @media (max-width: 480px) {
      padding: ${rem(32)} ${rem(16)};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const LeftSide = styled.div`
  background-color: ${({ theme }) => theme.colors.dark[7]};
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none !important;
  }
`

export const RightSide = styled.div`
  justify-content: center;

  h3,
  a {
    color: ${({ theme }) => theme.colors.dark[9]};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: ${rem(16)};
  }
`

export const TermosContainer = styled.div``
