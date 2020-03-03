import React, {useState} from 'react'
import {
  Section,
  Container,
  Form,
  Input,
  Button,
  Titulo,
  Svg,
  Text,
  TextError,
  Div
} from './styles'
import axios from 'axios'
import {FaTimes} from 'react-icons/fa'
import { Redirect } from 'react-router'
import {Loader} from '../loader'
import Swal from 'sweetalert2'

export const PasswordChange = () => {

  const [token, setToken] = useState(window.sessionStorage.getItem('token') || false)
  const [id, setId] = useState(window.sessionStorage.getItem('id') || false)
  
  const [back, setBack] = useState(false)

  const [loading, setLoading] = useState(false)

  const [pswd, setPswd] = useState('')
  const [newPswd, setNewPswd] = useState('')

  const sendChangedPass = () => {
    event.preventDefault()
    setLoading(true)
    axios({
      url: `${process.env.API_URL}/customers/change/credentials/${id}`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}` 
      },
      data: {
        toUpdate: "password",
        pswd,
        newPswd,
      },
    }).then(res=>{
      const updated = res.status 
      setLoading(false)
      if(updated === 200){
        Swal.fire({
          title: 'Listo',
          text: 'Contraseña actualizada con exito.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#008000'
        })
        goBack()
      } 
    }).catch(error => {
      if(error.response.statusText === "Unauthorized"){
        setLoading(false)
        Swal.fire({
          title: 'Contraseña incorrecta.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonColor: '#008000'
        })
      }
    })
  }
 
const goBack = () => {
  setBack(true)
}

if(token && id){
    return(
      <Section>
        <Container>
        <Svg>
          <FaTimes onClick={goBack} />
          {back ? <Redirect  to="/balance" /> : null}
        </Svg>
          <Form onSubmit={sendChangedPass}>
            <Titulo>Cambio de contraseña</Titulo>
            <Text>Contraseña</Text>
            <Input name="pswd" type="text" required pattern="[0-9]*" minLength="6" value={pswd} onChange={event => setPswd(event.target.value)} required />
            <Text>Nueva contraseña</Text>
            <Input name="newPswd" type="text" required pattern="[0-9]*" minLength="6" value={newPswd} onChange={event => setNewPswd(event.target.value)} required />
            <Button type="submit" >Cambiar</Button>
            <Div>
            {
              loading ? <Loader /> : null 
            }
          </Div>
          </Form>
        </Container>
      </Section>
    )
  }
  if(token === false && id === false){
    return(
      <Redirect to="/" />
    )
  }
}