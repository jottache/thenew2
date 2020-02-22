import {createGlobalStyle, keyframes} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    background-color: lightgrey;
  }
`

const lds = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Div = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after{
    content: " ";
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid green;
    border-color: green transparent green transparent;
    animation: ${lds} 1.2s linear infinite;
  }
`