import styled, {keyframes, css} from 'styled-components'

const appear = keyframes`
  from {
    transform: translateX(-450px);
  }

  to {
    transform: translateX(-200px);
  }
`
const disappear = keyframes`
from {
  transform: translateX(-100px);
}

to {
  transform: translateX(-450px);
}
`


export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://i.imgur.com/X9Jq6EA.jpg');
  @media (max-width: 520px){
    background-size: cover;
    background-position-x: -200px;
  }
`

export const Container = styled.div`
/* border: 1px solid red; */
  width: 60%;
  height: 100%;
  @media (max-width: 520px){
    width: 100%;
  }
`

export const BalanceContainer = styled.div`
/* border: 1px solid red; */
  background-color: white;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 30%;
  @media (max-width: 520px){
    height: auto;
  }
`

export const Div = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Div2 = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 520px){
    display: none;
  }
`
export const Div3 = styled.div`
  display: flex;
`

export const P = styled.div`
  color: gray;
  transition: .6s;
  & :hover{
    color: lightskyblue;
  }
`

export const MenuPosition = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  /* border: 1px solid green; */
  font-size: 2em;
  width: 100%;
  height: auto;
  margin: 0;
`

export const Name = styled.p`
  font-size: 1.2em;
  margin: 0;
  margin-right: 1em;
`
export const Svg = styled.div`
  font-size: 30px;
  position: relative;
  display: none;
  cursor: pointer;
  @media (max-width: 520px){
    display: block;
  }
`

export const Modal = styled.div`
  position: absolute;
  text-align: right;
  font-size: 16px;
  width: 140px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  transform: translateX(-110px);
  /* @media (max-width: 520px) {
    background-color: red;
    width: 300px;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 3;
    animation: 1s forwards ${appear};
  } */
`

export const Text = styled.p`
  font-size: 1em;
  color: gray;
  margin: 0;
  text-align: center;
`

export const BalanceNumber = styled.p`
  font-size: 3em;
  margin: 0;
  margin-bottom: .5em;
  text-align: center;
`

export const TransactionsContainer = styled.div`
  background-color: white;
  opacity: .9;
  width: 100%;
  height: 69%;
  overflow-y: auto;
  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    height: auto;
    border-radius: 4px;
    background-color: gray;
  }
  @media (max-width: 520px){
    height: auto;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: auto;
`
export const Thead = styled.thead`
  /* border: 1px solid green; */
`
export const Tbody = styled.tbody`
`
export const Tr = styled.tr`
  border-bottom: 1px solid lightgray;
  margin: 10px 0;
  &:nth-of-type(2n){
    background-color: lightgray;
  }
`
export const Th = styled.th`
  @media (max-width: 520px){
    :nth-child(2){
      display: none;
    }
  }
`
export const Td = styled.td`
  /* border: 1px solid red; */
  height: 45px;
  text-align: center;
  :nth-child(2){
    color: blue;
  }
  :nth-child(4){
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 520px){
    :nth-child(1){
      width: 30%;
      border-right: 1px solid gray;
    }
    :nth-child(2){
      display: none;
    }
    :nth-child(3){
      border-right: 1px solid gray;
    }
    :nth-child(4){
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
    }
  }
`
export const Red = styled.p`
  color: red;
  margin: 0;
`
export const Green = styled.p`
  color: green;
  margin: 0;
`