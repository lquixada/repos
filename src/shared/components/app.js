import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onSubmit}>
          Fetch repos
        </button>
        {' '}
        <hr />
        <div>
          Clicked: value times
        </div>
      </div>
    );
  }
}
