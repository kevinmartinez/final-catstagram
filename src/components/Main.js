import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.main`
  padding: 0;
  margin: 0;
  display: grid;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    section {
      grid-column: 1 / 4;
    }
    article {
      align-content: stretch;
    }
  }
`

const Main = ({ children }) => (
  <Fragment>
    <header>
      <h1>
        <Link to="/">Catstagram</Link>
      </h1>
    </header>
    <Content>{children}</Content>
  </Fragment>
)

export default Main
