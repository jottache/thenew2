import React, {useState, useEffect} from 'react'
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

export const PinChange = () => {

  const [token, setToken] = useState(window.sessionStorage.getItem('token') || false)
  const [id, setId] = useState(window.sessionStorage.getItem('id') || false)
  
  const [back, setBack] = useState(false)

  const [loading, setLoading] = useState(false)

  const [pin, setPin] = useState('')
  const [newPin, setNewPin] = useState('')

  setTimeout(()=>{
    setBackLogin(true)
  }, 10000)

  const sendChangedPin = () => {
    event.preventDefault()
    setLoading(true)
    axios({
      url: `${process.env.API_URL}/customers/change/credentials/${id}`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}` 
      },
      data: {
        toUpdate: "pin",
        pin,
        newPin,
      },
    }).then(res=>{
      setLoading(false)
      const updated = res.status 
      if(updated === 200){
        Swal.fire({
          title: 'Listo',
          text: 'Pin actualizado con exito.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#008000'
        })
        goBack()
      }
    }).catch(error => {
      if(error.response.statusText === "Unauthorized"){
        Swal.fire({
          title: 'Pin Incorrecto.',
          icon: 'error',
          showConfirmButton: true,
          confirmButtonColor: '#008000'
        })
        setLoading(false)
      }
    })
  }

  const goBack = () => {
    setBack(true)
  }
  if(token && id){
      return(
        <Section>
        <FaTimes />
        <Container>
        <Svg>
          <FaTimes onClick={goBack} />
          {back ? <Redirect  to={{pathname: "/balance", state: {id: id, token: token}}} /> : null}
        </Svg>
          <Form onSubmit={sendChangedPin}>
            <Titulo>Cambio de Pin</Titulo>
            <Text>Pin</Text>
            <Input name="pin" type="password" required pattern="[0-9]*" minLength="4" maxLength="4" value={pin} onChange={event => setPin(event.target.value)} />
            <Text>Nuevo Pin</Text>
            <Input name="newPin" type="password" required pattern="[0-9]*" minLength="4" maxLength="4" value={newPin} onChange={event => setNewPin(event.target.value)} />
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