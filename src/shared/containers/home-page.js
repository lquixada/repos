import React from 'react';
import {connect} from 'react-redux';

import {HomePage} from '../components/home-page';
import {provideHooks} from '../helpers';
import * as actions from '../actions';

const hooks = {
  fetch: ({dispatch}) => dispatch(actions.loadHomePage()),
};

export class HomePageContainer extends React.Component {
  componentDidMount(prevProps) {
    if (!this.hasLoaded()) {
      this.props.loadHomePage();
    }
  }

  hasLoaded() {
    return !this.props.reposContributorsCount.isEmpty();
  }

  render() {
    return (
      <HomePage />
    );
  }
}

const mapStateToProps = ({reposContributorsCount}) => ({reposContributorsCount});
const connected = connect(mapStateToProps, actions)(HomePageContainer);
export default provideHooks(hooks)(connected);
