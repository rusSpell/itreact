import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='test-status is ok' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('test-status is ok')
  })
  test('after creation <span> with correct status should be displayed', () => {
    const component = create(<ProfileStatus status='test-status is ok' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status='test-status is ok' />)
    const root = component.root
    expect( () => {
      let input = root.findByType('input')
    }).toThrow()
  })
  test('after creation <span> with correct status should be displayed', () => {
    const component = create(<ProfileStatus status='test-status is ok' />)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('test-status is ok')
  })
  test('<input> should be displayed in edtiMode instead of <span>', () => {
    const component = create(<ProfileStatus status='test-status is ok' />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('test-status is ok')
  })
  test('callBack should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status='test-status is ok' updateStatus={mockCallback} />)
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})


