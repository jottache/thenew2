import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {
  Section,
  Container,
  BalanceContainer,
  Title,
  Div,
  Name,
  Text,
  BalanceNumber,
  TransactionsContainer
} from './styles'

export const Balance = (props) =>{

  const [auth, setAuth] = useState(true)
  const [id, setId] = useState(props.location.state.id)
  const [token, setToken] = useState(props.location.state.token)
  const [data, setData] = useState('')


  useEffect(()=>{
    axios({
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
            <Title>EcoWallet</Title>
            <Name>hola {data.first_name}</Name>
            <Name>ci: {data.ci}</Name>
          </Div>
            <Text>Saldo disponible</Text>
            <BalanceNumber>{data.balance}</BalanceNumber>
          </BalanceContainer>
          <TransactionsContainer>
            {/* <Table></Table> */}
          </TransactionsContainer>
        </Container>
      </Section>
      </>
    )
  }
  else{
    <Redirect to="/"/>
  }
} 