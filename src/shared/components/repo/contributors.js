import React from 'react';
import styled from 'styled-components';
import fetch from 'cross-fetch';

import {flex} from '../../helpers';
import config from '../../config';

export class Contributors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributors: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.repo.name !== this.props.repo.name) {
      // Reset and fetch
      this.setState({contributors: []}, () => this.fetch());
    }
  }

  async fetch() {
    const endpoint = config.endpoints.contributors;
    const url = `${endpoint.replace('%{repo}', this.props.repo.name)}?page=1&per_page=40`;
    const res = await fetch(url);
    const contributors = await res.json();

    this.setState({contributors});
  }

  render() {
    return (
      <Wrapper>
        <Title>Contributors ({this.props.repo.contributors_count})</Title>

        <List>
          {this.state.contributors.map((contributor) =>
            <Item key={contributor.login}>
              <Link href={contributor.html_url}>
                <Image src={contributor.avatar_url} />
                <Text>{contributor.login}</Text>
              </Link>
            </Item>
          )}
        </List>
      </Wrapper>
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
