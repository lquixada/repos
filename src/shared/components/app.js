import React from 'react';

import Menu from '../containers/menu';

export class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onSubmit}>
          Fetch repos
        </button>
        {' '}
        <hr />
        <Menu />
      </div>
    );
  }
}
