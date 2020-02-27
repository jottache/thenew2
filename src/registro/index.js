import React, {useState} from 'react'
import {
  Section,
  Container,
  Container2,
  FormContainer,
  Form,
  Input,
  Div,
  Button,
  Text,
  Text2,
  Text3,
  TextError,
  Titulo,
  Titulo2,
  Opacity
} from './styles'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {Loader} from '../loader'

export const Registro = () => {

  const {register, handleSubmit, errors } = useForm()
  const [loading, setloading] = useState(false)

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [ci, setCi] = useState('')
  const [card_serial, setCard_serial] = useState('')
  const [card_code, setCard_code] = useState('')
  const [active, setActive] = useState(true)
  const [toActivate, setToActivate] = useState(false)
  
  const [pswd, setPswd] = useState('')
  const [pswdVerify, setPswdVerify] = useState('')
  const [pin, setPin] = useState('')
  const [pinVerify, setPinVerify] = useState('')

  const [existe, setExiste] = useState(false)
  const [verifyError, setVerifyError] = useState(false)
  const [registrar, setRegistrar] = useState(true)
  const [passView, setPassView] = useState(false)
  const [pinView, setPinView] = useState(false)

  const [goToLog, setGoToLog] = useState(false)

  const registerReq = () => {
    event.preventDefault()
    setloading(true)
    if(toActivate && pin === pinVerify){
      setVerifyError(false)
      axios({
        // url: 'http://18.224.118.22:18080/api/customers/activate/',
        url: 'http://192.168.86.40:3000/api/auth/sign-up/',
        method: 'post',
        data: {
          first_name,
          last_name,
          ci: `v${ci}`,
          pswd,
          pin,
          card_serial,
          card_code,
        }
      })
      .then((res)=>{
        console.log(res)
        const created = res.status
        if(created === 200){
          alert('usuario actualizado');
          setloading(false)
          setGoToLog(true)
          }
        }).catch((error)=>{
          console.log(error.response)
        })
    }
    if(pin === pinVerify){
      setloading(true)
      axios({
        // url: 'http://18.224.118.22:18080/api/auth/sign-up/',
        url: 'http://192.168.86.40:3000/api/auth/sign-up/',
        method: 'post',
        data: {
          first_name,
          last_name,
          ci: `v${ci}`,
          pswd,
          pin,
          card_serial,
          card_code,
          active,
        }
      })
      .then((res)=>{
        const created = res.status
        if(created === 201){
          alert('usuario creado con exito');
          setloading(false)
          setGoToLog(true)
          }
        }).catch((error)=>{
          console.log(error.response)
        })
    }
    else{
      setVerifyError(true)
      setloading(false)
    }
  }
  const registrationFirstStep = () =>{
    event.preventDefault()
    setloading(true)
    axios({
      // url: 'http://18.224.118.22:18080/api/customers/exist/',
      url: 'http://192.168.86.40:3000/api/customers/exist/',
      method: 'post',
      data: {
        ci: `v${ci}`,
        card_serial,
        card_code
      }
    })
    .then((res)=>{
      console.log(res)
      const exist = res.data.exist
      const toActivate = res.data.toActivate
      if(toActivate){
        console.log('existe, actualizar')
        setloading(false)
        setToActivate(true)
        setRegistrar(false)
        setPassView(true)
      }
      if(exist === false){
        console.log('no existe, crear')
        setloading(false)
        setRegistrar(false)
        setPassView(true)
      }
      if(exist){
        console.log('existe, no actualizar')
        setloading(false)
        setExiste(true)
      }
    }).catch((error)=>{
      console.log(error.response)
    })
  }
  const passToPin = () => {
    event.preventDefault()
    setloading(false)
    if(pswd === pswdVerify){
      setPassView(false)
      setPinView(true)
      setVerifyError(false)
    } else {
      setVerifyError(true)
    }
  }

    return(
      <Section>
        <Container>
        <FormContainer>
          <Titulo>Registro</Titulo>
          {
            registrar ? 
            <Form onSubmit={registrationFirstStep}>
              <Text>Nombre</Text>
              <Input name="nombre" type="text" required value={first_name} onChange={event => setFirst_name(event.target.value)} ref={register({ required: true })}/>
              <Text>Apellido</Text>
              <Input name="apellido" type="text" required value={last_name} onChange={event => setLast_name(event.target.value)} ref={register({ required: true })}/>
              <Text>Cedula</Text>
              <Input name="cedula" type="text" required pattern="[0-9]*" maxLength="8" value={ci} onChange={event => setCi(event.target.value)} ref={register({ required: true })}/>
              <Text>Serial</Text>
              <Input name="serial" type="text" required pattern="[0-9]*" minLength="10" maxLength="10" value={card_serial} onChange={event => setCard_serial(event.target.value)} ref={register({ required: true })}/>
              <Text>Codigo serial</Text>
              <Input name="codigo" type="text" required pattern="[0-9]*" minLength="10" maxLength="10" value={card_code} onChange={event => setCard_code(event.target.value)} ref={register({ required: true })}/>
              <Button type="submit">Siguiente</Button>
              {
                existe ?
                <p>ya existe el usuario</p>
                : null
              }
            </Form>
            : null
          }
          {
            passView ?
            <Form onSubmit={passToPin}>
              <Text>Contraseña</Text>
              <Input name="pass" type="text" required minLength="6" value={pswd} onChange={event => setPswd(event.target.value)} />
              <Text>Verifica tu contraseña</Text>
              <Input name="verifyPass" type="text" required minLength="6" value={pswdVerify} onChange={event => setPswdVerify(event.target.value)} />
              {
                verifyError ?
                <p>las contraseñas no coinciden</p>
                : null
              }
              <Button type="submit">Siguiente</Button>
            </Form>
            : null
          }
          {
            pinView ?
            <Form onSubmit={registerReq}>
              <Text>Pin</Text>
              <Input name="pin" type="text" required pattern="[0-9]*" minLength="4" maxLength="4" value={pin} onChange={event => setPin(event.target.value)}/>
              <Text>Verifica tu pin</Text>
              <Input name="verrifyPin" type="text" required pattern="[0-9]*" minLength="4" maxLength="4" value={pinVerify} onChange={event => setPinVerify(event.target.value)} />
              {
                verifyError ? 
                <p>los campos no coinciden</p>
                : null
              }
              <Button type="submit">Registrar</Button>
            </Form>
            : null
          }
          <Div>
            {
              loading ? <Loader /> : null 
            }
          </Div>
          <Text2>ya estas registrado? <Link to="/">Ingresa</Link></Text2>
        </FormContainer>
        </Container>
        <Container2>
        <Opacity>
          {/* <Titulo2>EcoWallet</Titulo2>
          <Text3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ab. Quo quisquam repudiandae nam? Exercitationem voluptatum, voluptatibus dicta distinctio et aliqui.</Text3> */}
        </Opacity>
        </Container2>
        {
          goToLog ?
          <Redirect to="/" />
          : null
        }
      </Section>
    )
}
