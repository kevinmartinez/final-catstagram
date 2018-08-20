import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Article = styled.article`
  margin: 5px;
  padding-bottom: 25px;
  background: #fff;
  h2 {
    text-align: center;
  }
  margin: auto;
  align-self: stretch;
  @media (min-width: 700px) {
    max-width: 900px;
    margin: 10px;
    img {
      max-width: 100%;
    }
  }
`

const Post = ({ title, description, image, link }) => (
  <Fragment>
    <Article>
      <header>
        <h2>{title}</h2>
      </header>
      <Link to={`/post/${link}`}>
        <figure>
          <img src={image} alt="cat" />
        </figure>
      </Link>
      <footer>{description}</footer>
    </Article>
  </Fragment>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likeCounter: PropTypes.number.isRequired,
}

export default Post
