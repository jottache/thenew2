import React, {useState} from 'react'
import {
  Section,
  Container,
  Form,
  Input,
  Button,
  Text,
  Titulo
} from './styles'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Context from '../context'

export const Login = () => {

  const [error, setError] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const sendRequest = () => {
    axios({
      url: 'http://192.168.86.40:3000/api/auth/sign-in/',
      method: 'post',
      auth: {
        username,
        password,
      }
    })
    .then((res)=>{
      console.log(res)
      setToken(res.data.token)
      console.log(token)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return(
    <Context.Consumer>
    {
      ({ activateAuth }) => {
        {
          token ?
          activateAuth(token)
          :
          null
        }
        return(
          <Section>
            <Container>
              <Titulo>Ingresa</Titulo>
              <Form onSubmit={sendRequest}>
                <Input type="text" placeholder="cedula" value={username} onChange={event => setUsername(event.target.value)} />
                <Input type="password" placeholder="pass" value={password} onChange={event => setPassword(event.target.value)}/>
                <Button>ingresar</Button>
              </Form>
              <Text>no esstas registrado? <Link to="/registro">registrate</Link></Text>
            </Container>
          </Section>
        )
      }
    }
    </Context.Consumer>
  )
}
