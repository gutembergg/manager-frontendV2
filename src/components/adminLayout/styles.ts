import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: var(--primary);
  color: var(--white);
`

export const Main = styled.main`
  padding: 2.5rem 10%;

  @media (min-width: 760px) {
    padding: 3.5rem 7.5rem;
  }
`
