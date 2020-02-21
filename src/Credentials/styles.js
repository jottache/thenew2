import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  margin: auto;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 90%;
  height: auto;
`

export const Titulo = styled.p`
  text-align: center;
  width: 90%;
  text-align: center;
  font-size: 2em;
`

export const Text = styled.p`
  width: 90%;
  color: gray;
  text-align: left;
`
export const TextError = styled.p`
  width: 90%;
  color: red;
  text-align: left;
`

export const Input = styled.input`
  width: 90%;
  height: 30px;
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid gray;
`
export const Button = styled.button`
  width: 90%;
  height: 30px;
  border: none;
  background-color: green;
  color: white;
  margin-bottom: 1.1em;
  cursor: pointer;
`