import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {HomePage} from '../components/home-page'
import {provideHooks} from '../helpers'
import * as actions from '../actions'

const hooks = {
  fetch: ({params, dispatch}) => dispatch(actions.fetchPage({
    name: 'home',
    owner: params.owner || 'facebook'
  }))
}

export class HomePageContainer extends React.Component {
  componentDidMount () {
    this.fetch()
  }

  componentDidUpdate (prevProps) {
    if (this.hasChanged(prevProps)) {
      this.fetch()
    }
  }

  fetch () {
    this.props.fetchPage({
      name: 'home',
      owner: this.props.owner || 'facebook'
    })
  }

  hasChanged (prevProps) {
    return (
      prevProps.owner !== this.props.owner
    )
  }

  render () {
    return (
      <HomePage />
    )
  }
}

const mapStateToProps = (state, {match}) => ({
  owner: match.params.owner,
  repoName: match.params.repo
})
const composed = compose(provideHooks(hooks), connect(mapStateToProps, actions))
export default composed(HomePageContainer)
