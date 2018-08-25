import {mount} from 'enzyme'
import React from 'react'
import {MemoryRouter} from 'react-router'

import {Contributors} from '../contributors'

describe('<Contributors />', () => {
  it('list contributors', () => {
    const data = [
      {login: 'user1', html_url: 'https://user1/",', avatar_url: 'https://avatars1/'},
      {login: 'user2', html_url: 'https://user2/",', avatar_url: 'https://avatars2/'},
      {login: 'user3', html_url: 'https://user3/",', avatar_url: 'https://avatars3/'},
    ]
    const component = mount(
      <MemoryRouter keyLength={0}>
        <Contributors
          total={3}
          data={data}
          hasLoaded
          hasMore
          isLoadingMore={false}
          onNext={(f) => f}
        />
      </MemoryRouter>,
    )

    expect(component).toMatchSnapshot()
  })

  it('shows loading', () => {
    const component = mount(<Contributors
      data={[]}
      hasMore={false}
      total={3}
      hasLoaded={false}
      isLoadingMore={false}
      onNext={(f) => f}
    />)
    expect(component).toMatchSnapshot()
  })

  it('show button More', () => {
    const component = mount(
      <MemoryRouter keyLength={0}>
        <Contributors
          total={3}
          data={[]}
          hasLoaded
          hasMore
          isLoadingMore={false}
          onNext={(f) => f}
        />
      </MemoryRouter>,
    )
    expect(component).toMatchSnapshot()
  })

  it('show button Loading', () => {
    const component = mount(
      <MemoryRouter keyLength={0}>
        <Contributors
          total={3}
          data={[]}
          hasLoaded
          hasMore
          isLoadingMore={false}
          onNext={(f) => f}
        />
      </MemoryRouter>,
    )
    expect(component).toMatchSnapshot()
  })
})
