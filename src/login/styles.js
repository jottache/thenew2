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
  background-color: white;
  width: 90%;
  height: 70%;
`

export const Form = styled.form`
/* border: 1px solid blue; */
  margin: auto;
  width: 90%;
  height: 70%;
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
  cursor: pointer;
`
export const Button2 = styled.button`
  width: 90%;
  height: 30px;
  border: none;
  background-color: white;
  color: black;
  border: 1px solid green;
  margin-bottom: 1.1em;
  margin-top: 1.1em;
  cursor: pointer;
`

export const Text = styled.p`
  text-align: left;
  width: 80%;
  margin: 0;
`
export const Text2 = styled.p`
  text-align: center;
  width: 80%;
  margin: 0;
`
export const TextError = styled.p`
  text-align: left;
  width: 80%;
  margin: 0;
  color: red;
`

export const Titulo = styled.h1`
  text-align: center;
  font-size: 2em;
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