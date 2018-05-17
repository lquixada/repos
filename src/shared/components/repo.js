import React from 'react';
import styled from 'styled-components';

export class Repo extends React.Component {
  getRepo() {
    const {repos, match} = this.props;
    return repos.find((repo) => repo.name === match.params.repo);
  }

  render() {
    return (
      <Wrapper>
        <pre>
          {JSON.stringify(this.getRepo(), null, '\t')}
        </pre>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  color: red;
`;
