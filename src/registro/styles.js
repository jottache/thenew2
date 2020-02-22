import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
/* border: 1px solid red; */
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const Container2 = styled.div`
  /* border: 1px solid red; */
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.imgur.com/X9Jq6EA.jpg');
  background-position: -100px -50px;
  position: relative;
`

export const FormContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  height: 80%;
`

export const Form = styled.form`
/* border: 1px solid blue; */
  margin: auto;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Div = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
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
`

export const Text = styled.p`
  margin: 0;
  text-align: left;
  width: 90%;
  color: gray;
`
export const Text2 = styled.p`
  text-align: center;
  width: 90%;
  margin: 0;
`
export const TextError = styled.p`
  margin: 0;
  text-align: left;
  width: 90%;
  color: red;
`

export const Titulo = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin: 0 auto .5em 0;
`

export const Opacity = styled.div`
  background-color: black;
  opacity: .3;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export const Titulo2 = styled.h1`
  text-align: right;
  font-size: 2em;
  color: white;
`
export const Text3 = styled.p`
  text-align: right;
  width: 50%;
  /* margin: 0; */
  color: white;
`