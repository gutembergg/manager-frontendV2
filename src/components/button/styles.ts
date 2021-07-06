import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  margin-top: 7px;
  height: 42px;

  border: 0;
  border-radius: 4px;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  transition: 0ms.2s;

  &:hover {
    background: ${shade(0.2, '#00e676')};
  }
`
