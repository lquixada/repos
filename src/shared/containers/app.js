import React from 'react';
import {connect} from 'react-redux';

import {App} from '../components/app';
import * as actions from '../actions';

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <App onSubmit={this.handleFetch} />
    );
  }
}

export default connect(null, actions)(AppContainer);

