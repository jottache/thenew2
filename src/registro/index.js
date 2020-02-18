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

export const Registro = () => {

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [ci, setCi] = useState('')
  const [card_serial, setCard_serial] = useState('')
  const [card_code, setCard_code] = useState('')
  const [active, setActive] = useState(true)
  
  const [pswd, setPswd] = useState('')
  const [pswdVerify, setPswdVerify] = useState('')
  const [pin, setPin] = useState('')
  const [pinVerify, setPinVerify] = useState('')

  const [verifyError, setVerifyError] = useState(false)
  const [registrar, setRegistrar] = useState(true)
  const [passView, setPassView] = useState(false)
  const [pinView, setPinView] = useState(false)

  const registerReq = () => {
    event.preventDefault()
    axios({
      url: 'http://192.168.86.40:3000/api/auth/sign-up/',
      method: 'post',
      data: {
        first_name,
        last_name,
        ci,
        pswd,
        pin,
        card_serial,
        card_code,
        active
      }
    })
    .then((res)=>{
      console.log(res)
      console.log(pswd)
      console.log(pin)
      console.log(card_serial)
      console.log(card_code)
      })
  }
  const registrationFirstStep = () =>{
    event.preventDefault()
    // axios({
    //   url: 'http://192.168.86.40:3000/api/auth/exist/',
    //   method: 'post',
    //   data: {
    //     ci,
    //     card_serial,
    //   }
    // })
    // .then((res)=>{
    //   console.log(res)
    // })
    setRegistrar(false)
    setPassView(true)
  }
  const passToPin = () => {
    event.preventDefault()
    if(pswd === pswdVerify){
      setPassView(false)
      setPinView(true)
    } else {
      setVerifyError(true)
    }
  }

    return(
      <Section>
      <Container>
        <Titulo>Registro</Titulo>
        <Form onSubmit={registerReq}>
        {
          registrar ? 
          <>
            <Input type="text" placeholder="Nombre" value={first_name} onChange={event => setFirst_name(event.target.value)}/>
            <Input type="text" placeholder="Apellido"value={last_name} onChange={event => setLast_name(event.target.value)}/>
            <Input type="text" placeholder="Cedula" value={ci} onChange={event => setCi(event.target.value)}/>
            <Input type="text" placeholder="Serial" value={card_serial} onChange={event => setCard_serial(event.target.value)}/>
            <Input type="text" placeholder="codigo serial" value={card_code} onChange={event => setCard_code(event.target.value)}/>
            <Button onClick={registrationFirstStep}>Siguiente</Button>
          </>
          : null
        }
        {
          passView ?
          <>
            <Input type="text" placeholder="password" value={pswd} onChange={event => setPswd(event.target.value)} />
            <Input type="text" placeholder="verifica password" value={pswdVerify} onChange={event => setPswdVerify(event.target.value)} />
            {
              verifyError ?
              <p>las contraseñas no coinciden</p>
              : null
            }
            <Button onClick={passToPin}>Siguiente</Button>
          </>
          : null
        }
        {
          pinView ?
          <>
            <Input type="text" placeholder="pin" value={pin} onChange={event => setPin(event.target.value)} />
            <Input type="text" placeholder="verifica pin" value={pinVerify} onChange={event => setPinVerify(event.target.value)} />
            <Button type="submit">Registrar</Button>
          </>
          : null
        }
        </Form>
        <Text>ya estas registrado? <Link to="/login">log in</Link></Text>
      </Container>
      </Section>
    )
}
