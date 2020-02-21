import React, {useState} from 'react'
import {
  Section,
  Container,
  Container2,
  FormContainer,
  Form,
  Input,
  Button,
  Text,
  Text2,
  TextError,
  Titulo,
  Opacity
} from './styles'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export const Registro = () => {

  const {register, handleSubmit, errors } = useForm()

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
    if(toActivate && pin === pinVerify){
      setVerifyError(false)
      axios({
        url: 'http://18.224.118.22:18080/api/customers/activate/',
        method: 'post',
        data: {
          first_name,
          last_name,
          ci,
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
          setGoToLog(true)
          }
        })
    }
    if(pin === pinVerify){
      axios({
        url: 'http://18.224.118.22:18080/api/auth/sign-up/',
        method: 'post',
        data: {
          first_name,
          last_name,
          ci,
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
          setGoToLog(true)
          }
        })
    }
    else{
      setVerifyError(true)
    }
  }
  const registrationFirstStep = () =>{
    event.preventDefault()
    axios({
      url: 'http://18.224.118.22:18080/api/customers/exist/',
      method: 'post',
      data: {
        ci,
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
        setToActivate(true)
        setRegistrar(false)
        setPassView(true)
      }
      if(exist === false){
        console.log('no existe, crear')
        console.log(res)
        setRegistrar(false)
        setPassView(true)
      }
      if(exist){
        console.log('existe, no actualizar')
        setExiste(true)
      }
    })
  }
  const passToPin = () => {
    event.preventDefault()
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
          <Form onSubmit={handleSubmit(registerReq)}>
          {
            registrar ? 
            <>
              {errors.nombre ? <TextError>*Nombre</TextError> : <Text>Nombre</Text>}
              <Input name="nombre" type="text" value={first_name} onChange={event => setFirst_name(event.target.value)} ref={register({ required: true })}/>
              {errors.apellido ? <TextError>*Apellido</TextError> : <Text>Apellido</Text>}
              <Input name="apellido" type="text" value={last_name} onChange={event => setLast_name(event.target.value)} ref={register({ required: true })}/>
              {errors.cedula ? <TextError>*Cedula</TextError> : <Text>Cedula</Text>}
              <Input name="cedula" type="text" value={ci} onChange={event => setCi(event.target.value)} ref={register({ required: true })}/>
              {errors.serial ? <TextError>*Serial</TextError> : <Text>Serial</Text>}
              <Input name="serial" type="text" value={card_serial} onChange={event => setCard_serial(event.target.value)} ref={register({ required: true })}/>
              {errors.codigo ? <TextError>*Codigo serial</TextError> : <Text>Codigo serial</Text>}
              <Input name="codigo" type="text" value={card_code} onChange={event => setCard_code(event.target.value)} ref={register({ required: true })}/>
              <Button onClick={handleSubmit(registrationFirstStep)}>Siguiente</Button>
              {
                existe ?
                <p>ya existe el usuario</p>
                : null
              }
            </>
            : null
          }
          {
            passView ?
            <>
              {errors.pass ? <TextError>*Contraseña</TextError> : <Text>Contraseña</Text>}
              <Input name="pass" type="text" placeholder="password" value={pswd} onChange={event => setPswd(event.target.value)} ref={register({ required: true })}/>
              {errors.verifyPass ? <TextError>*Verifica tu contraseña</TextError> : <Text>Verifica tu contraseña</Text>}
              <Input name="verifyPass" type="text" placeholder="verifica password" value={pswdVerify} onChange={event => setPswdVerify(event.target.value)} ref={register({ required: true })}/>
              {
                verifyError ?
                <p>las contraseñas no coinciden</p>
                : null
              }
              <Button onClick={handleSubmit(passToPin)}>Siguiente</Button>
            </>
            : null
          }
          {
            pinView ?
            <>
              {errors.pin ? <TextError>*Pin</TextError> : <Text>Pin</Text>}
              <Input name="pin" type="text" placeholder="pin" value={pin} onChange={event => setPin(event.target.value)} ref={register({ required: true })}/>
              {errors.verrifyPin ? <TextError>*Verifica tu pin</TextError> : <Text>Verifica tu pin</Text>}
              <Input name="verrifyPin" type="text" placeholder="verifica pin" value={pinVerify} onChange={event => setPinVerify(event.target.value)} ref={register({ required: true })}/>
              {
                verifyError ? 
                <p>los campos no coinciden</p>
                : null
              }
              <Button type="submit">Registrar</Button>
            </>
            : null
          }
          </Form>
          <Text2>ya estas registrado? <Link to="/">Ingresa</Link></Text2>
        </FormContainer>
        </Container>
        <Container2>
        <Opacity />
        </Container2>
        {
          goToLog ?
          <Redirect to="/" />
          : null
        }
      </Section>
    )
}
