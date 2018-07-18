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
    this.props.history.replace(`/r/${this.state.value}`)
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
