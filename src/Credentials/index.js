import React from 'react'
import {
  Section,
  Container,
  Form,
  Input,
  Button,
  Text,
  TextError
} from './styles'
import { useForm }  from 'react-hook-form'



export const Credentials = (props) => {

  const pass = props.location.state.pass
  const pin = props.location.state.pin

  const {register, handleSubmit, errors } = useForm()

  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const [oldPin, setOldPin] = useState('')
  const [newPin, setNewPin] = useState('')




  if(pass){
    return(
      <Section>
        <Container>
          <Form onSubmit={handleSubmit(sendChangedPass)}>
            <Titulo>Cambio de contraseña</Titulo>
            {errors.oldPass ? <TextError>*Antigua contraseña</TextError> : <Text>Antigua contraseña</Text>}
            <Input name="oldPAss" type="text" value={oldPass} onChange={event => setOldPass(event.target.value)} ref={register({ required: true })}/>
            {errors.newPass ? <TextError>*Nueva contraseña</TextError> : <Text>Nueva contraseña</Text>}
            <Input name="newPAss" type="text" value={newPass} onChange={event => setNewPass(event.target.value)} ref={register({ required: true })}/>
            <Button disabled={ oldPass && newPass ? false : true}>Cambiar</Button>
          </Form>
        </Container>
      </Section>
    )
  }
  if(pin){
    return(
      <Section>
      <Container>
        <Form onSubmit={handleSubmit(sendChangedPass)}>
          <Titulo>Cambio de Pin</Titulo>
          {errors.oldPin ? <TextError>*Antiguo Pin</TextError> : <Text>Antiguo Pin</Text>}
          <Input name="oldPin" type="text" value={oldPin} onChange={event => setOldPin(event.target.value)} ref={register({ required: true })}/>
          {errors.newPin ? <TextError>*Nuevo Pin</TextError> : <Text>Nuevo Pin</Text>}
          <Input name="newPin" type="text" value={newPin} onChange={event => setNewPin(event.target.value)} ref={register({ required: true })}/>
          <Button disabled={ oldPin && newPin ? false : true}>Cambiar</Button>
        </Form>
      </Container>
    </Section>
    )
  }
}