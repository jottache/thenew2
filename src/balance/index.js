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
  TransactionsContainer
} from './styles'
import {FaAlignRight, FaTimes} from 'react-icons/fa'

export const Balance = (props) =>{

  // const [auth, setAuth] = useState(true)
  // const [id, setId] = useState(props.location.state.id)
  // const [token, setToken] = useState(props.location.state.token)
  // const [data, setData] = useState('')
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(!open)

  }


  // useEffect(()=>{
  //   axios({
  //     url: `http://192.168.86.40:3000/api/customers/${id}`,
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
              <Name>hola jose Vicente</Name>
              <Svg>
                <FaAlignRight onClick={openModal} />
                {
                  open ? 
                  <Modal>
                    <Link to={{pathname: "/pass-change", state: {id: id, token: token}}}>cambiar contraseña</Link>
                    <Link to={{pathname: "/pass-change", state: {id: id, token: token}}}>cambiar pin</Link>
                  </Modal>
                  : null
                }
              </Svg>
            </Menu>
          </Div>
            <Text>Saldo disponible</Text>
            <BalanceNumber>$ 1232.123,00</BalanceNumber>
          </BalanceContainer>
          <TransactionsContainer>
            {/* <Table></Table> */}
          </TransactionsContainer>
        </Container>
      </Section>
      </>
    )
  // }
  // else{
  //   <Redirect to="/"/>
  // }
} 