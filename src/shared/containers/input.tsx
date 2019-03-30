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

  public render() {
    return (
      <Input value={this.state.value}
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp} />
    )
  }

  private hasOwnerChanged(prevProps) {
    return this.getOwner(prevProps.location) !== this.getOwner(this.props.location)
  }

  private handleChange(evt) {
    const value = evt.target ? evt.target.value : evt
    this.setState({value: value.trim()})
  }

  private handleKeyUp(evt) {
    if (this.state.value.length < this.state.minLength) {
      return
    }

    if (evt.which === 13) {
      this.navigate()
    }
  }

  private navigate() {
    this.props.history.push(`/r/${this.state.value}`)
  }

  private setCurrentOwner() {
    this.setState({
      value: this.getOwner(this.props.location),
    })
  }

  private getOwner(location) {
    const match = /\/r\/(\w+)\/?/.exec(location.pathname)

    if (match) {
      return match[1]
    }

    return ''
  }
}

export default withRouter(InputContainer)
