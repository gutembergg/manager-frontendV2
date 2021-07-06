import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface IEntryCardsItemsProps {
  color?: string
  background?: string
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--primary);
`
export const WrapperLogo = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 40px;
`

export const Logo = styled.img`
  width: 100%;
`

export const EntryCard = styled.div`
  width: 90%;
  max-width: 550px;
  padding: 40px;
  background: #373737;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;

    padding: 50px;
  }
`

export const EntryCardItem = styled.div<IEntryCardsItemsProps>`
  width: 100%;
  max-width: 280px;
  height: 160px;

  padding: 10px;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0ms.2s;

  ${props =>
    props.background
      ? css`
          background: ${props.background};

          &:hover {
            background: ${shade(0.2, props.background)};
          }
        `
      : css`
          background: #00e676;

          &:hover {
            background: ${shade(0.2, '#00e676')};
          }
        `}

  ${props =>
    props.color
      ? css`
          color: ${props.color};
        `
      : css`
          color: #fff;
        `}


  > span {
    font-weight: bold;
  }

  @media (min-width: 760px) {
    height: 240px;
  }
`
