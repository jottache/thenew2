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
  TextError
} from './styles'
import { useForm }  from 'react-hook-form'
import axios from 'axios'
import {FaTimes} from 'react-icons/fa'
import { Redirect } from 'react-router'




export const Credentials = (props) => {

  const getPass = props.location.state.pass || false
  const getPin = props.location.state.pin || false
  const token = props.location.state.token || false
  const id = props.location.state.id || false

  const {register, handleSubmit, errors } = useForm()
  const [back, setBack] = useState(false)

  const [toUpdate, setToUpdate] = useState('')

  const [pswd, setPswd] = useState('')
  const [newPswd, setNewPswd] = useState('')

  const [pin, setPin] = useState('')
  const [newPin, setNewPin] = useState('')

  const sendChangedPass = () => {
    setToUpdate('password')
    axios({
      // url: 'http://18.224.118.22:18080/api/auth/sign-in/',
      url: `http://192.168.86.40:3000/api/customers/change/credentials/${id}`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}` 
      },
      data: {
        toUpdate,
        pswd,
        newPswd,
      },
    }).then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})
  }
  const sendChangedPin = () => {
    setToUpdate('pin')
    axios({
      // url: 'http://18.224.118.22:18080/api/auth/sign-in/',
      url: `http://192.168.86.40:3000/api/customers/change/credentials/:${id}`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}` 
      },
      data: {
        toUpdate,
        pin,
        newPin,
      },
    }).then(res=>{
      console.log(res)
    })
  }
  
  const goBack = () => {
    setBack(true)
  }


  if(getPass){
    return(
      <Section>
        <Container>
        <Svg>
          <FaTimes onClick={goBack} />
          {back ? <Redirect to="/balance" /> : null}
        </Svg>
          <Form onSubmit={handleSubmit(sendChangedPass)}>
            <Titulo>Cambio de contraseña</Titulo>
            {errors.pswd ? <TextError>*Antigua contraseña</TextError> : <Text>Antigua contraseña</Text>}
            <Input name="pswd" type="text" value={pswd} onChange={event => setPswd(event.target.value)} ref={register({ required: true })}/>
            {errors.newPswd ? <TextError>*Nueva contraseña</TextError> : <Text>Nueva contraseña</Text>}
            <Input name="newPswd" type="text" value={newPswd} onChange={event => setNewPswd(event.target.value)} ref={register({ required: true })}/>
            <Button>Cambiar</Button>
          </Form>
        </Container>
      </Section>
    )
   }
   if(getPin){
     return(
       <Section>
       <FaTimes />
       <Container>
         <Form onSubmit={handleSubmit(sendChangedPin)}>
           <Titulo>Cambio de Pin</Titulo>
            {errors.pin ? <TextError>*Antiguo Pin</TextError> : <Text>Antiguo Pin</Text>}
            <Input name="pin" type="text" value={pin} onChange={event => setPin(event.target.value)} ref={register({ required: true })}/>
           {errors.newPin ? <TextError>*Nuevo Pin</TextError> : <Text>Nuevo Pin</Text>}
           <Input name="newPin" type="text" value={newPin} onChange={event => setNewPin(event.target.value)} ref={register({ required: true })}/>
           <Button>Cambiar</Button>
         </Form>
       </Container>
     </Section>
     )
   }
}