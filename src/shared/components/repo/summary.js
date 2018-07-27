import React from 'react'
import styled from 'styled-components'
import EyeIcon from 'react-octicons/lib/eye'
import ForkIcon from 'react-octicons/lib/repo-forked'
import StarIcon from 'react-octicons/lib/star'
import IssueIcon from 'react-octicons/lib/issue-opened'
import LawIcon from 'react-octicons/lib/law'

import {flex, issuesUrl, forksUrl, watchersUrl, stargazersUrl, addSeparator} from '../../helpers'

export const Summary = ({owner, repo}) => (
  <List>
    <Item>
      <Link href={stargazersUrl(owner, repo.get('name'))}>
        <StarIcon />{addSeparator(repo.get('stargazers_count'))} stars
      </Link>
    </Item>
    <Item>
      <Link href={watchersUrl(owner, repo.get('name'))}>
        <EyeIcon />{addSeparator(repo.get('subscribers_count'))} watchers
      </Link>
    </Item>
    <Item>
      <Link href={forksUrl(owner, repo.get('name'))}>
        <ForkIcon />{addSeparator(repo.get('forks_count'))} forks
      </Link>
    </Item>
    <Item>
      <Link href={issuesUrl(owner, repo.get('name'))}>
        <IssueIcon />{addSeparator(repo.get('open_issues_count'))} issues
      </Link>
    </Item>
    {repo.get('license') && <Item>
      <NoLink><LawIcon />{repo.getIn(['license', 'name'])}</NoLink>
    </Item>}
  </List>
)

const List = styled.ul`
  ${flex.display()}
  ${flex.around()}
  ${flex.flow('row', 'wrap')};
  margin-top: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: .6rem;
`

const Item = styled.li`
  ${flex('1 0 auto')}
  overflow: hidden;

  &:first-child {
    border-radius: .6rem 0 0 .6rem;
  }

  &:last-child {
    border-radius: 0 .6rem .6rem 0;
  }
`

const BaseLink = `
  ${flex.display()}
  ${flex.center()}
  ${flex.middle()}
  text-decoration: none;
  padding: 1rem;
  color: #333;
  font-size: 1.2rem;
  border-left: .2rem solid transparent;

  .octicon {
    fill: #333;
    margin-right: .5rem;
  }
`

const Link = styled.a.attrs({
  rel: 'noopener',
  target: '_blank'
})`
  ${BaseLink}

  &:hover {
    text-decoration: none;
    color: #327fc7;
    background-color: #f8f8f8;

    .octicon {
      fill: #327fc7;
    }
  }
`

const NoLink = styled.span`
  ${BaseLink}
`
