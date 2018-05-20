import React from 'react';
import styled from 'styled-components';

import {flex} from '../../helpers';

export class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.fetchNext = this.fetchNext.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.repoName !== this.props.repoName) {
      this.fetch();
    }
  }

  fetch() {
    if (!this.hasContributorsLoaded()) {
      this.props.fetchContributors(this.props.repoName);
    }
  }

  fetchNext() {
    const {repoName, contributors} = this.props;
    this.props.fetchMoreContributors(repoName, contributors.next);
  }

  hasContributorsLoaded() {
    const {contributors} = this.props;
    return contributors && contributors.result && contributors.result.length !== 0;
  }

  hasMoreContributors() {
    return !!this.props.contributors.next;
  }

  isLoading() {
    return this.props.contributors.isLoading;
  }

  getCount() {
    const {count} = this.props;
    return count? count[1] : 'error';
  }

  render() {
    return (
      <Wrapper>
        <Title>Contributors ({this.getCount()})</Title>
        {this.renderContent()}
      </Wrapper>
    );
  }

  renderContent() {
    if (!this.hasContributorsLoaded()) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <List>
          {this.props.contributors.result.map((contributor, i) =>
            <Item key={contributor.login+i}>
              <Link href={contributor.html_url}>
                <Image src={contributor.avatar_url} />
                <Text>{contributor.login}</Text>
              </Link>
            </Item>
          )}
        </List>
        {this.hasMoreContributors() &&
          <Button onClick={this.fetchNext}>
            {this.isLoading()? 'Loading...' : 'More'}
          </Button>
        }
      </div>
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

const Button = styled.button`
  display: block;
  width: 100%;
  padding: .6rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #0366d6;
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: .3rem;
  cursor: pointer;

  &:hover, &:focus {
    background-color: #f6f8fa;
  }
`;
