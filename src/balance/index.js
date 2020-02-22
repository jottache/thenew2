import React, {useState, useEffect} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import {
  Section,
  Container,
  BalanceContainer,
  Title,
  Div,
  Svg,
  Modal,
  Menu,
  Name,
  Text,
  BalanceNumber,
  TransactionsContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from './styles'
import {FaAlignRight, FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'

export const Balance = (props) =>{

  const [auth, setAuth] = useState(true)
  const [id, setId] = useState(props.location.state.id)
  const [token, setToken] = useState(props.location.state.token)
  const [data, setData] = useState('')
  const [open, setOpen] = useState(false)

  const fakeData = [
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Jabon 1L Plaza V.', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Caraotas 1kg Petare', monto: Math.round(Math.random()*100), upDown: true},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Jabon 1L Plaza V.', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Arroz 1kg Chacao', monto: Math.round(Math.random()*100), upDown: true},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Caraotas 1kg Petare', monto: Math.round(Math.random()*100), upDown: true},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Arroz 1kg Chacao', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Jabon 1L Plaza V.', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Arroz 1kg Chacao', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Caraotas 1kg Petare', monto: Math.round(Math.random()*100), upDown: true},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Arroz 1kg Chacao', monto: Math.round(Math.random()*100), upDown: true},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Jabon 1L Plaza V.', monto: Math.round(Math.random()*100), upDown: false},
    {fecha: '10/12/2020', ref: Math.round(Math.random()*1000), descripcion: 'Arroz 1kg Chacao', monto: Math.round(Math.random()*100), upDown: false},
  ]

  const openModal = () => {
    setOpen(!open)
  }



  useEffect(()=>{
    axios({
      url: `http://18.224.118.22:18080/api/customers/${id}`,
      url: `http://192.168.86.40:3000/api/customers/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }).then(res => {
      console.log(res)
      setData(res.data.data)
      console.log(data)
    })
  },[])

  if(id && token){
    return(
      <>
      <Section>
        <Container>
          <BalanceContainer>
          <Div>
            <div>
              <Title>EcoWallet</Title>
              <Name>ci:{data.ci}</Name>
              {/* <Name>ci 20068522</Name> */}
            </div>
            <Menu>
              <Name>hola {data.first_name} {data.last_name}</Name>
              {/* <Name>hola jose</Name> */}
              <Svg>
                <FaAlignRight onClick={openModal} />
                {
                  open ? 
                  <Modal>
                    <Link to={{pathname: "/credentials", state: {id: id, token: token, pass: true}}}>cambiar contraseña</Link>
                    <Link to={{pathname: "/credentials", state: {id: id, token: token, pin: true }}}>cambiar pin</Link>
                    <Link to="/" >salir</Link>
                  </Modal>
                  : null
                }
              </Svg>
            </Menu>
          </Div>
            <Text>Saldo disponible</Text>
            <BalanceNumber>$ {data.balance}</BalanceNumber>
            {/* <BalanceNumber>$ 123.123</BalanceNumber> */}
          </BalanceContainer>
          <TransactionsContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Fecha</Th>
                  <Th>Ref.</Th>
                  <Th>Descripcion</Th>
                  <Th>Monto</Th>
                  <Th>up/down</Th>
                </Tr>
              </Thead>
              {
                fakeData.map((data)=>{
                  return(
                      <Tr>
                        <Td>{data.fecha}</Td>
                        <Td>{data.ref}</Td>
                        <Td>jabon 1L plaza V.</Td>
                        <Td>$ {data.monto}</Td>
                        <Td>{data.upDown ? <FaLongArrowAltUp /> : <FaLongArrowAltDown /> }</Td>
                      </Tr>
                  )
                })
              }
            </Table>
          </TransactionsContainer>
        </Container>
      </Section>
      </>
    )
  }
  else{
    <Redirect to="/" />
  }
} 