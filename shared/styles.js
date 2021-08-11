import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        min-height: 100%;
        background-color: #ffffff;
        color: #363636;
        font-family: sans-serif;
        font-size: 1rem;
     
      }

      a {
        color: #363636;
        text-decoration: none;
      }

      code {
        color: #363636;
      }

      text {
        color: #363636
      }

      section {
        padding: 1rem;
      }

      h1 {
        color:#363636;
      }

      h2 {
        color: #363636;
      }

      h3 {
        color: #363636;
      }

      h4 {
        color: #363636;
      }

      h5 {
        color: #363636;
      }

      h6 {
        color: #363636;
      }

      p {
        color: #363636;
      }
      
      li {
        color: #363636;
      }
      td {
        color: #363636;
      }

      th {
        color: #363636;
      }

    `}
  />
)

export const basicStyles = css`
  background-color: gray;
  color: #363636;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`

export const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

export const Basic = styled.div`
  ${basicStyles};
`

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`
export const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`
