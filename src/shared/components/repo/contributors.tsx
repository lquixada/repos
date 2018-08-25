import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import {flex, tablets} from '../../helpers'

interface IContributor {
  login: string
  avatar_url: string
  html_url: string
}
interface IProps {
  data: IContributor[]
  total: string | number
  hasLoaded: boolean
  hasMore: boolean
  isLoadingMore: boolean
  onNext(f: any): any
}

export const Contributors = (props: IProps) => (
  <Wrapper>
    <Title>Contributors ({props.total})</Title>
    {!props.hasLoaded ? <Loading /> : <Content {...props} />}
  </Wrapper>
)

const Loading = () => (
  <div>Loading...</div>
)

const Content = ({data, hasMore, isLoadingMore, onNext}: IProps) => (
  <div>
    <List>
      {data.map((contributor, i) =>
        <Item key={contributor.login + i}>
          <Link to={`/r/${contributor.login}`}>
            <Image alt={`User ${contributor.login}`} src={`${contributor.avatar_url}&s=40`} />
            <Text>{contributor.login}</Text>
          </Link>
        </Item>,
      )}
    </List>
    {hasMore &&
      <Button onClick={onNext}>
        {isLoadingMore ? 'Loading...' : 'More'}
      </Button>
    }
  </div>
)

const Wrapper = styled.div`
  margin: 2rem 0;
`

const Title = styled.h3`
  color: #767676;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.5;
`

const List = styled.ul`
  ${flex.display()}
  ${flex.left()}
  ${flex.flow('row', 'wrap')};
  margin-top: 1rem;
`

const Item = styled.li`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  margin-bottom: 1rem;
  width: 25%;
  font-size: 1.2rem;
  white-space: nowrap;

  @media (${tablets}) {
    width: 33.33%;
  }
`

const Link = styled(NavLink)`
  ${flex.display()}
  ${flex.left()}
  ${flex.middle()}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Image = styled.img`
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  overflow: hidden;
`

const Text = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

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
`
