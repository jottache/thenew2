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
import {FaAlignRight, FaTimes} from 'react-icons/fa'

export const Balance = (props) =>{

  // const [auth, setAuth] = useState(true)
  // const [id, setId] = useState(props.location.state.id)
  // const [token, setToken] = useState(props.location.state.token)
  // const [data, setData] = useState('')
  const [open, setOpen] = useState(false)

  const fakeData = [
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
    {fecha: '10/12/2020', ref: Math.random()*1000, descripcion: 'Lorem ipsum dolor sit  adipisicing elit. Nostrum', monto: Math.random()*100, upDown: ()=>{const bar = Math.random();if(bar <= 0.5){return true}else{return false}}},
  ]

  const openModal = () => {
    setOpen(!open)

  }


  // useEffect(()=>{
  //   axios({
  //     url: `http://18.224.118.22:18080/api/customers/${id}`,
  //     method: 'get',
  //     headers: {
  //       Authorization: `Bearer ${token}` 
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     setData(res.data.data)
  //     console.log(data)
  //   })
  // },[])

  // if(id && token){
    return(
      <>
      <Section>
        <Container>
          <BalanceContainer>
          <Div>
            <div>
              <Title>EcoWallet</Title>
              <Name>ci: 20068522</Name>
            </div>
            <Menu>
              <Name>hola Jose Vicente</Name>
              <Svg>
                <FaAlignRight onClick={openModal} />
                {
                  open ? 
                  <Modal>
                    <Link to={{pathname: "/credentials", state: {id: id, token: token, pass: true}}}>cambiar contraseña</Link>
                    <Link to={{pathname: "/credentials", state: {id: id, token: token, pin: true }}}>cambiar pin</Link>
                  </Modal>
                  : null
                }
              </Svg>
            </Menu>
          </Div>
            <Text>Saldo disponible</Text>
            <BalanceNumber>$ 233.555,00</BalanceNumber>
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
              <Tbody>
              {
                fakeData.map((data)=>{
                  return(
                    <Tr>
                      <Td>{data.fecha}</Td>
                      <Td>{data.ref}</Td>
                      <Td>jabon 1L plaza V.</Td>
                      <Td>$ {data.monto}</Td>
                      <Td>{data.upDown ? 'sumo' : 'resto' }</Td>
                    </Tr>
                  )
                })
              }
              </Tbody>
            </Table>
          </TransactionsContainer>
        </Container>
      </Section>
      </>
    )
  // }
  // else{
  //   <Redirect to="/" />
  // }
} 