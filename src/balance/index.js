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

export const Balance = (props) =>{

  const [auth, setAuth] = useState(true)
  const [id, setId] = useState(props.location.state.id || false)
  const [token, setToken] = useState(props.location.state.token || false)
  const [data, setData] = useState('')
  const [orders, setOrders] = useState([])
  const [open, setOpen] = useState(false)


  const openModal = () => {
    setOpen(!open)
  }

  const transformText = (str) => {
    const arr = str.split(' ')
    const name = arr[0].toLowerCase()
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  useEffect(()=>{
    axios({
      url: `${process.env.API_URL}/customers/${id}`,
      // url: `http://192.168.86.40:3000/api/customers/${id}`,
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

  useEffect(()=>{
    axios({
      url: `${process.env.API_URL}/orders/${id}`,
      // url: `http://192.168.86.40:3000/api/orders/${id}`,
      // url: `http://192.168.86.40:3000/api/orders/1`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}` 
      }
    }).then(res => {
      console.log(res)
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
              {/* <Name>ci 20068522</Name> */}
            </div>
            <Menu>
              <Name>{data.first_name ? transformText(data.first_name) : '' } {data.last_name ? transformText(data.last_name) : '' }</Name>
              {/* <Name>hola jose</Name> */}
              <Svg>
                <FaAlignRight onClick={openModal} />
                {
                  open ? 
                  <Modal>
                    <Link to={{pathname: "/passwordChange", state: {id: id, token: token, pass: true}}}>cambiar contraseña</Link>
                    <Link to={{pathname: "/pinChange", state: {id: id, token: token, pinNumber: true }}}>cambiar pin</Link>
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
                orders.map((order)=>{
                  if(order.to_up === false){
                    return(
                      <Tr>
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
                      <Tr>
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
  if(id && token === false){
    <Redirect to="/" />
  }
} 