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
        color: #6690a1;
        font-family: sans-serif;
        font-size: 1rem;
     
      }

      a {
        color: #6690a1;
        text-decoration: none;
      }

      code {
        color: #6690a1;
      }

      text {
        color: #6690a1
      }

      section {
        padding: 1rem;
      }

      h1 {
        color:#6690a1;
      }

      h2 {
        color: #6690a1;
      }

      h3 {
        color: #6690a1;
      }

      h4 {
        color: #6690a1;
      }

      h5 {
        color: #6690a1;
      }

      h6 {
        color: #6690a1;
      }

      p {
        color: #6690a1;
      }
      
      li {
        color: #6690a1;
      }
      td {
        color: #6690a1;
      }

      th {
        color: #6690a1;
      }

    `}
  />
)

export const basicStyles = css`
  background-color: gray;
  color: #6690a1;
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
