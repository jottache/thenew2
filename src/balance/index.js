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
  MenuPosition,
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
import { slide as Menu } from 'react-burger-menu'

export const Balance = () =>{

  const styles = {
    bmBurgerButton: {
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      background: '#fff',
      padding: '1em',
      fontSize: '.8em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#000',
      padding: '0.8em'
    },
    bmItem: {
      color: '#000',
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  }


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
            </div>
            <MenuPosition>
              <Name>{data.first_name ? transformText(data.first_name) : '' } {data.last_name ? transformText(data.last_name) : '' }</Name>
              <Svg>
                  <Menu right customBurgerIcon={<FaAlignRight />} styles={styles} width={'70%'}>
                    <Link style={{ textDecoration: 'none' }} to="/passwordChange">cambiar contraseña</Link>
                    <Link style={{ textDecoration: 'none' }} to="/pinChange">cambiar pin</Link>
                    <Link style={{ textDecoration: 'none' }} to="/" onClick={closeSession}>salir</Link>
                  </Menu>
              </Svg>
            </MenuPosition>
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
                </Tr>
              </Thead>
              <tbody>
              {
                orders.map((order)=>{
                  if(order.to_up === false){
                    return(
                      <Tr key={order.id}>
                        <Td>{order.createdAt.substring(0, 10)}</Td>
                        <Td>#{order.reference}</Td>
                        <Td>{order.description}</Td>
                        <Td>$ {order.total_price}<Red><FaLongArrowAltDown /></Red> </Td>
                      </Tr>
                  )
                  }
                  if(order.to_up === true){
                    return(
                      <Tr key={order.id}>
                        <Td>{order.createdAt.substring(0, 10)}</Td>
                        <Td>#{order.reference}</Td>
                        <Td>{order.description}</Td>
                        <Td>$ {order.total_price} <Green><FaLongArrowAltUp /></Green> </Td>
                      </Tr>
                  )
                  }
                })
              }
              </tbody>
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