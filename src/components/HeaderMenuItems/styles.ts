import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.li`
  border-radius: 7px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 5px;
  transition: background 0.2s;
  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: ${shade(0.2, '#373737')};
  }
`
