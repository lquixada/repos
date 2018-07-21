import React from 'react'
import {mount} from 'enzyme'
import {createLocation} from 'history'

import {InputContainer} from '../input'

describe('<InputContainer />', () => {
  let component
  let history
  let location

  beforeEach(() => {
    location = createLocation('/r/owner1')
    history = {
      push: jest.fn()
    }
    component = mount(<InputContainer location={location} history={history} />)
  })

  it('renders input with owner name', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders new owner name when location changes', () => {
    component.setProps({
      location: createLocation('/r/owner2')
    })
    expect(component.update()).toMatchSnapshot()
  })

  it('navigate when user presses Enter', () => {
    component.find('input').simulate('change', {target: {value: 'some-owner'}})
    component.find('input').simulate('keyup', {which: 13}) // Enter

    expect(history.push).toBeCalledWith('/r/some-owner')
  })

  it('does not navigate when user types owner smaller than 2 characters', () => {
    component.find('input').simulate('change', {target: {value: 'o'}})
    component.find('input').simulate('keyup', {which: 13}) // Enter

    expect(history.push).not.toBeCalled()
  })
})
