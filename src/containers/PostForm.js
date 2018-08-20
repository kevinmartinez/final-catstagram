import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../actions/posts'
import { storage } from '../firebase'
import FileUploader from 'react-firebase-file-uploader'

class PostForm extends Component {
  state = {
    title: '',
    description: '',
    username: '',
    isUploading: false,
    progress: 0,
    imageURL: '',
  }

  // Write handlers and get values from names
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false })
    storage
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageURL: url }))
  }

  handlePostSubmit = e => {
    const { title, description, imageURL } = this.state
    e.preventDefault()
    this.props.dispatch(
      addPost({
        title,
        description,
        image: imageURL,
      })
    )
    this.setState({ title: '', description: '' })
  }

  render() {
    const { title, description } = this.state
    return (
      <div>
        <form onSubmit={this.handlePostSubmit}>
          <fieldset>
            <legend>Choose your favorite monster</legend>
            <label htmlFor="title">Kattnamn</label>
            <input
              value={title}
              type="text"
              name="title"
              placeholder="Thy shall nameth the cat"
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="description">Bildtext</label>
            <input
              value={description}
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleInputChange}
            />
            <input type="submit" value="Send" />
          </fieldset>
          <div>
            <label>Image:</label>
            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            {this.state.imageUrl && <img src={this.state.imageUrl} />}
            <FileUploader
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={storage.ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
  auth: state.auth,
})

export default connect(mapStateToProps)(PostForm)
