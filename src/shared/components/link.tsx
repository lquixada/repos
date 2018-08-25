import React from 'react'
import RepoIcon from 'react-octicons/lib/repo'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

import {flex, imgUrl} from '../helpers'

interface IProps {
  owner: string
  repoName: string
  contributorsCount: number
  isLoading: boolean
}

export const Link = ({owner, repoName, contributorsCount, isLoading}: IProps) => (
  <Wrapper to={`/r/${owner}/${repoName}`}>
    <Icon />
    <Text>
      {repoName}
      {' '}
      (<Help title='number of contributors'>{contributorsCount}</Help>)
    </Text>
    {isLoading ? <img src={imgUrl('loading.gif')} /> : ''}
  </Wrapper>
)

const Wrapper = styled(NavLink)`
  ${flex.display()}
  ${flex.flow('row', 'nowrap')};
  text-decoration: none;
  padding: .8rem 1rem;
  color: #333;
  font-size: 1.2rem;
  border-left: .2rem solid transparent;

  &:hover {
    text-decoration: none;
    color: #2d72b3;
    background-color: #fdfdfd;
  }

  &.active {
    color: #333;
    border-left: .2rem solid #d26911;
    background-color: #f4f4f4;
  }
`

const Icon = styled(RepoIcon)`
  margin-right: .5rem;
`

const Text = styled.span`
  ${flex('1')}
`

const Help = styled.span`
  color: #2d72b3;
  font-size: 1.1rem;
  border-bottom: 1px dashed #2d72b3;
  cursor: help;
`
