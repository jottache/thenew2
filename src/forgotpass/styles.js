import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url('https://i.imgur.com/X9Jq6EA.jpg');
`

export const Container = styled.div`
  background-color: white;
  opacity: .9;
  margin: auto;
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Form = styled.form`
  text-align: center;
  width: 90%;
  height: auto;
  margin: 0;
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
  width: 100%;
  height: 30px;
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
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
export const Svg = styled.div`
  width: auto;
  position: absolute;
  top: .5em;
  right: .5em;
  font-size: 1.5em
`
export const Div = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
`