import React, {useState} from 'react'
import {
  Section,
  Container,
  Container2,
  FormContainer,
  Form,
  Input,
  Button,
  Text,
  TextRigth,
  Titulo
} from './styles'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Context from '../context'
import Cookies from 'js-cookie'

export const Login = () => {

  const [error, setError] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [id, setId] = useState('')

  const sendRequest = (event) => {
    event.preventDefault()
    axios({
      url: 'http://192.168.86.40:3000/api/auth/sign-in/',
      method: 'post',
      auth: {
        username,
        password,
      },
      withCredentials: true
    })
    .then((res)=>{
      console.log(res)
      console.log(res.headers)
      setToken(res.data.token)
      setId(res.data.id)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return(
    <Section>
      <Container>
      <FormContainer>
        <Titulo>Ingresa a EcoWallet</Titulo>
        <Form onSubmit={sendRequest}>
          <Text>Cedula</Text>
          <Input type="text" value={username} onChange={event => setUsername(event.target.value)} />
          <Text>Contraseña</Text>
          <Input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
          <Button>ingresar</Button>
          <Text>no esstas registrado? <Link to="/registro">registrate</Link></Text>
        </Form>
      </FormContainer>
      </Container>

      <Container2>
        <p>segundo</p>
      </Container2>
    </Section>
  )
}
