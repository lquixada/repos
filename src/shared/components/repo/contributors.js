import React from 'react';
import styled from 'styled-components';

import {flex} from '../../helpers';

export class Contributors extends React.Component {
  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.repo.name !== this.props.repo.name) {
      this.fetch();
    }
  }

  fetch() {
    if (!this.hasContributorsLoaded()) {
      this.props.fetchContributors(this.props.repo.name);
    }
  }

  hasContributorsLoaded() {
    const {contributors} = this.props;
    return contributors && contributors.result && contributors.result.length !== 0;
  }

  isLoading() {
    return this.props.contributors.isLoading;
  }

  render() {
    return (
      <Wrapper>
        <Title>Contributors ({this.props.repo.contributors_count})</Title>
        {this.renderContent()}
      </Wrapper>
    );
  }

  renderContent() {
    if (!this.hasContributorsLoaded()) {
      return (
        <div>No content</div>
      );
    }

    if (this.isLoading()) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <List>
        {this.props.contributors.result.map((contributor) =>
          <Item key={contributor.login}>
            <Link href={contributor.html_url}>
              <Image src={contributor.avatar_url} />
              <Text>{contributor.login}</Text>
            </Link>
          </Item>
        )}
      </List>
    );
  }
}

const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h3`
  color: #767676;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.5;
`;

const List = styled.ul`
  ${flex.display()}
  ${flex.left()}
  ${flex.flow('row', 'wrap')};
  margin-top: 1rem;
`;

const Item = styled.li`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  margin-bottom: 1rem;
  width: 25%;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const Link = styled.a`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Image = styled.img`
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;
`;

const Text = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
