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
import {Loader} from '../loader'
import {Redirect} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const ForgotPass = () => {

  const [loading, setLoading] = useState(false)
  const [back, setBack] = useState(false)

  const [ci, setCi] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const sendForgetPass = () => {
  }
  const goBack = () => {
    setBack(true)
  }

  return(
    <Section>
        <Container>
        <Svg>
          <FaTimes onClick={goBack} />
          {back ? <Redirect  to="/" /> : null}
        </Svg>
          <Form onSubmit={sendForgetPass}>
            <Titulo>Recuperacion de contraseña</Titulo>
            <Text>Cedula</Text>
            <Input name="ci" type="text" required value={ci} onChange={event => setCi(event.target.value)} />
            <Text>Correo electronico</Text>
            <Input name="email" type="text" required value={email} onChange={event => setEmail(event.target.value)} />
            <Text>Numero Telefonico</Text>
            <Input name="numero" type="text" required value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
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