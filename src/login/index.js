import React, {useState} from 'react'
import {
  Section,
  Container,
  Container2,
  FormContainer,
  Form,
  Input,
  Button,
  Button2,
  Div,
  Text,
  Text2,
  TextError,
  Titulo,
  Opacity
} from './styles'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {Loader} from '../loader'

export const Login = () => {

  const {register, handleSubmit, errors } = useForm()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [id, setId] = useState('')

  const sendRequest = (event) => {
    setLoading(true)
    axios({
      // url: 'http://18.224.118.22:18080/api/auth/sign-in/',
      url: 'http://192.168.86.40:3000/api/auth/sign-in/',
      method: 'post',
      auth: {
        username,
        password,
      },
    })
    .then((res)=>{
      console.log(res)
      if(res.status === 200){
        const identificador = res.data.id
        const tokenInicio = res.data.token
        setId(identificador)
        setToken(tokenInicio)
        setLoading(false)
      }
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }

  const redirectToLogin = () => {
    setRedirect(true)
  }

  return(
    <Section>
      <Container>
      <FormContainer>
        <Titulo>Ingresa a EcoWallet</Titulo>
        <Form onSubmit={handleSubmit(sendRequest)}>
          {errors.cedula ? <TextError>* Cedula</TextError> : <Text>Cedula</Text>}
          <Input
            name="cedula" 
            type="text" 
            value={username} 
            onChange={event => setUsername(event.target.value)}
            ref={register({ required: true })}
          />
          {errors.contraseña ? <TextError>* Contraseña</TextError> : <Text>Contraseña</Text>}
          <Input 
            name="contraseña"
            type="password" 
            value={password} 
            onChange={event => setPassword(event.target.value)}
            ref={register({ required: true })}
          />
          <Button type="submit">ingresar</Button>
          <Text2>no estas registrado?</Text2>
          <Button2 onClick={redirectToLogin}>registrate</Button2>
          <Div>
            {
              loading ? <Loader /> : null
            }
          </Div>
        </Form>
      </FormContainer>
      </Container>

      <Container2>
      <Opacity />
      </Container2>
      {
        token && id ? 
        <Redirect to={{ pathname: "/balance", state: {id: id, token: token} }}/>
        : null
      }
      {
        redirect ? <Redirect to="/registro"/> : null 
      }
    </Section>
  )
}
