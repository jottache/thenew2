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
  Td,
  Green,
  Red
} from './styles'
import {FaAlignRight, FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'

export const Balance = () =>{

  const [id, setId] = useState(window.sessionStorage.getItem('id') || false)
  const [token, setToken] = useState(window.sessionStorage.getItem('token') || false)
  const [data, setData] = useState('')
  const [orders, setOrders] = useState([])
  const [open, setOpen] = useState(false)


  const openModal = () => {
    setOpen(!open)
  }

  const closeSession = () => {
    window.sessionStorage.removeItem('id')
    window.sessionStorage.removeItem('token')
  }

  const transformText = (str) => {
    const arr = str.split(' ')
    const name = arr[0].toLowerCase()
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  useEffect(()=>{
      axios({
        url: `${process.env.API_URL}/customers/${id}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }).then(res => {
        setData(res.data.data)
      })
  },[])

  useEffect(()=>{
      axios({
        url: `${process.env.API_URL}/orders/${id}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }).then(res => {
        setOrders(res.data.order)
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
              <Name>ci: {data.ci ? data.ci.substring(1) : '' }</Name>
            </div>
            <Menu>
              <Name>{data.first_name ? transformText(data.first_name) : '' } {data.last_name ? transformText(data.last_name) : '' }</Name>
              <Svg>
                <FaAlignRight onClick={openModal} />
                {
                  open ? 
                  <Modal>
                    <Link to="/passwordChange">cambiar contraseña</Link>
                    <Link to="/pinChange">cambiar pin</Link>
                    <Link to="/" onClick={closeSession}>salir</Link>
                  </Modal>
                  : null
                }
              </Svg>
            </Menu>
          </Div>
            <Text>Saldo disponible</Text>
            <BalanceNumber>$ {data.balance}</BalanceNumber>
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
                orders.map((order)=>{
                  if(order.to_up === false){
                    return(
                      <Tr key={order.id}>
                        <Td>{order.createdAt.substring(0, 10)}</Td>
                        <Td>#{order.reference}</Td>
                        <Td>{order.description}</Td>
                        <Td>$ {order.total_price}</Td>
                        <Td><Red><FaLongArrowAltDown /></Red></Td>
                      </Tr>
                  )
                  }
                  if(order.to_up === true){
                    return(
                      <Tr key={order.id}>
                        <Td>{order.createdAt.substring(0, 10)}</Td>
                        <Td>#{order.reference}</Td>
                        <Td>{order.description}</Td>
                        <Td>$ {order.total_price}</Td>
                        <Td><Green><FaLongArrowAltUp /></Green></Td>
                      </Tr>
                  )
                  }
                })
              }
            </Table>
          </TransactionsContainer>
        </Container>
      </Section>
      </>
    )
  }
  if(id === false && token === false){
    return(
      <Redirect to="/" />
    )
  }
} 