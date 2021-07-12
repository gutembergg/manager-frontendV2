import styled from 'styled-components'

export const Container = styled.header`
  padding: 4px 10%;
  background: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 760px) {
    padding: 4px 9%;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 100px;
`

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`
