import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const RegisterContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.white};
  min-height: 500px;

  > div {
    display: flex;
    flex-direction: column;

    flex: 1;
    padding: ${rem(128)};

    @media (max-width: 1300px) {
      padding: ${rem(64)};
    }

    @media (max-width: 1024px) {
      padding: ${rem(32)};
    }

    @media (max-height: 800px) {
      &:first-of-type {
        padding: ${rem(16)} ${rem(32)};
      }
      &:last-of-type {
        padding: ${rem(32)} ${rem(32)};
      }
    }

    @media (max-width: 768px) {
      &:first-of-type {
        display: none;
      }
    }
  }
`

export const LeftSide = styled.div`
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.dark[7]};
  overflow: auto;
  height: 100vh;

  img {
    width: 100%;
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-height: 800px) {
    img {
      max-width: 300px;
    }
  }
`

export const RightSide = styled.div`
  justify-content: space-between;
  overflow: auto;
  height: 100vh;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${rem(16)};
  }

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  a {
    color: ${({ theme }) => theme.black};
  }

  @media (max-height: 800px) {
    justify-content: flex-start;
  }
`

export const TermosContainer = styled.div`
  margin-top: ${rem(16)};
`