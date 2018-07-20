import React from 'react'
import {withRouter} from 'react-router'

import {Input} from '../components/input'

export class InputContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      minLength: 2
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  // Renders current owner on server-side rendering
  componentWillMount () {
    this.setCurrentOwner()
  }

  // Renders current owner on browser navigation
  componentDidUpdate (prevProps) {
    if (this.hasOwnerChanged(prevProps)) {
      this.setCurrentOwner()
    }
  }

  setCurrentOwner () {
    this.setState({
      value: this.getOwner(this.props.location)
    })
  }

  getOwner (location) {
    const match = /\/r\/(\w+)\/?/.exec(location.pathname)

    if (match) {
      return match[1]
    }
  }

  hasOwnerChanged (prevProps) {
    return this.getOwner(prevProps.location) !== this.getOwner(this.props.location)
  }

  handleChange (evt) {
    const value = evt.target ? evt.target.value : evt
    this.setState({value: value.trim()})
  }

  handleKeyUp (evt) {
    if (this.state.value.length < this.state.minLength) {
      return
    }

    if (evt.which === 13) {
      this.navigate()
    }
  }

  navigate () {
    this.props.history.push(`/r/${this.state.value}`)
  }

  render () {
    return (
      <Input value={this.state.value}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp} />
    )
  }
}

export default withRouter(InputContainer)
