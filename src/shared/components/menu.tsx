import React from 'react'
import styled from 'styled-components'

import {phones} from '../helpers'
import {Count} from '../types'
import {Link} from './link'

interface IProps {
  owner: string
  items: Count[]
}

export const Menu: React.SFC<IProps> = ({owner, items}) => (
  <Wrapper>
    <List>
      {items.map((item) => (
        <Item key={item[0]}>
          <Link
            owner={owner}
            repoName={item[0]}
            contributorsCount={item[1]}
            isLoading={item[2]}
          />
        </Item>
      ))}
    </List>
  </Wrapper>
) as React.ReactElement<any>

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0;
  max-height: 40rem;
  color: #333;
  font-size: 1.2rem;
  background-color: #fff;
  border: .1rem solid #e5e5e5;
  border-radius: .6rem;
  box-shadow: 0 .1rem .1rem rgba(0,0,0,.1);
  overflow-y: auto;

  @media (${phones}) {
    max-height: 20rem;
  }
`

const List = styled.ul`
  border-radius: .6rem;
`

const Item = styled.li`
  &:first-child {
    border-radius: .6rem .6rem 0 0;
    overflow: hidden;
  }

  &:last-child {
    border-radius: 0 0 .6rem .6rem;
    overflow: hidden;
  }
`
