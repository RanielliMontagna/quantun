import styled from '@emotion/styled'

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`
