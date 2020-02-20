import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
border: 1px solid red;
  width: 60%;
  height: 100%;
`

export const BalanceContainer = styled.div`
border: 1px solid red;
  width: 100%;
  height: auto;
`

export const Div = styled.div`
  width: auto;
  height: auto;
  margin: 20px 0 4em 2em;
`

export const Title = styled.p`
  /* border: 1px solid green; */
  font-size: 2em;
  width: 100%;
  height: auto;
  margin: 0;
`

export const Name = styled.p`
  font-size: 1.2em;
  margin: 0;
`

export const Text = styled.p`
  font-size: 1em;
  color: gray;
  margin: 0;
  text-align: center;
`

export const BalanceNumber = styled.p`
  font-size: 3em;
  margin: 0;
  margin-bottom: .5em;
  text-align: center;
`

export const TransactionsContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  height: auto;
`