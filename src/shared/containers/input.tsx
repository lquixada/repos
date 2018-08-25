import * as H from 'history'
import React from 'react'
import {withRouter} from 'react-router'

import {Input} from '../components/input'

interface IState {
  minLength: number
  value: string
}

export class InputContainer extends React.Component<any, IState, any> {
  constructor(props) {
    super(props)
    this.state = {
      minLength: 2,
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  // Renders current owner on server-side rendering
  public componentWillMount() {
    this.setCurrentOwner()
  }

  // Renders current owner on browser navigation
  public componentDidUpdate(prevProps) {
    if (this.hasOwnerChanged(prevProps)) {
      this.setCurrentOwner()
    }
  }

  public setCurrentOwner() {
    this.setState({
      value: this.getOwner(this.props.location),
    })
  }

  public getOwner(location) {
    const match = /\/r\/(\w+)\/?/.exec(location.pathname)

    if (match) {
      return match[1]
    }

    return ''
  }

  public hasOwnerChanged(prevProps) {
    return this.getOwner(prevProps.location) !== this.getOwner(this.props.location)
  }

  public handleChange(evt) {
    const value = evt.target ? evt.target.value : evt
    this.setState({value: value.trim()})
  }

  public handleKeyUp(evt) {
    if (this.state.value.length < this.state.minLength) {
      return
    }

    if (evt.which === 13) {
      this.navigate()
    }
  }

  public navigate() {
    this.props.history.push(`/r/${this.state.value}`)
  }

  public render() {
    return (
      <Input value={this.state.value}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp} />
    )
  }
}

export default withRouter(InputContainer)
