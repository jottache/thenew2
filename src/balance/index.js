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
  const [id, setId] = useState(props.location.state.id || false)
  const [token, setToken] = useState(props.location.state.token || false)
  const [data, setData] = useState('')
  const [orders, setOrders] = useState([])
  const [open, setOpen] = useState(false)


  const openModal = () => {
    setOpen(!open)
  }



  useEffect(()=>{
    axios({
      // url: `http://18.224.118.22:18080/api/customers/${id}`,
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

  useEffect(()=>{
    axios({
      url: `http://192.168.86.40:3000/api/orders/${id}`,
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
                  <Th>Producto</Th>
                  <Th>Tienda</Th>
                  <Th>Monto</Th>
                  <Th>up/down</Th>
                </Tr>
              </Thead>
              {
                orders.map((order)=>{
                  return(
                      <Tr>
                        <Td>{order.createdAt.substring(0, 10)}</Td>
                        <Td>{order.reference}</Td>
                        <Td>{order.machine.product.product}</Td>
                        <Td>{order.machine.shop.name_shop}</Td>
                        <Td>$ {order.total_price}</Td>
                        {/* <Td>{order.upDown ? <FaLongArrowAltUp /> : <FaLongArrowAltDown /> }</Td> */}
                        <Td><FaLongArrowAltDown /></Td>
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
  if(id && token === false){
    <Redirect to="/" />
  }
} 