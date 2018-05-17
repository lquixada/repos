import React from 'react';
import styled from 'styled-components';

import {Title} from './title';

export class Repo extends React.Component {
  getRepo() {
    const {repos, match} = this.props;
    return repos.find((repo) => repo.name === match.params.repo);
  }

  render() {
    const repo = this.getRepo();

    if (!repo) {
      return null;
    }

    return (
      <Wrapper>
        <Title>{repo.name}</Title>
        <pre>
          {JSON.stringify(repo, null, '\t')}
        </pre>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  color: red;
`;
