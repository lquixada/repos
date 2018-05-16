import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <ul>
        {this.props.repos.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    );
  }
}
