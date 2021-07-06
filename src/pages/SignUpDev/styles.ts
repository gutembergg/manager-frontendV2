import styled from 'styled-components'
export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--primary);

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 500px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 95%;

  margin-top: 10px;
  padding: 20px;
  border: 1px solid var(--secondary);
  border-radius: 4px;
  background: var(--secondary);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  > h1 {
    text-align: center;
    margin-bottom: 15px;
    color: var(--white);
    font-size: 1.4em;
  }
`

export const WrapperLogo = styled.div`
  width: 100%;
  max-width: 300px;

  @media (min-width: 760px) {
    margin-right: 50px;
    max-width: 400px;
  }
`

export const Logo = styled.img`
  width: 100%;
`

export const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 350px;
  margin-top: 7px;

  a {
    text-decoration: none;
    color: var(--green);
  }
  a + a {
    margin-top: 5px;
  }

  color: var(--green);
`
