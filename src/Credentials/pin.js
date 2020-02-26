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

export const PinChange = (props) => {

  const [getPin, setGetPin] = useState(props.location.state.pinNumber || false)
  const [token, setToken] = useState(props.location.state.token)
  const [id, setId] = useState(props.location.state.id)
  
  const [back, setBack] = useState(false)

  const [loading, setLoading] = useState(false)

  const [pin, setPin] = useState('')
  const [newPin, setNewPin] = useState('')

  const sendChangedPin = () => {
    event.preventDefault()
    setLoading(true)
    axios({
      // url: 'http://18.224.118.22:18080/api/auth/sign-in/',
      url: `http://192.168.86.40:3000/api/customers/change/credentials/${id}`,
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
      console.log(res)
      setLoading(false)
      const updated = res.status 
      if(updated === 200){
        alert('Pin actualizado con exito')
        goBack()
      }
    }).catch(error => {
      console.log(error.response)
      if(error.response.statusText === "Unauthorized"){
        alert('pin incorrecto')
        setLoading(false)
      }
    })
  }

  const goBack = () => {
    setBack(true)
  }

  if(getPin){
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
           <Input name="pin" type="text" required pattern="[0-9]*" minLength="4" maxLength="4" value={pin} onChange={event => setPin(event.target.value)} />
          <Text>Nuevo Pin</Text>
          <Input name="newPin" type="text" required pattern="[0-9]*" minLength="4" maxLength="4" value={newPin} onChange={event => setNewPin(event.target.value)} />
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
}