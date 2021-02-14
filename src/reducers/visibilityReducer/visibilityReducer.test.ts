import visibilityReducer from './visibilityReducer'
import expect from 'expect'
import deepfreeze from 'deep-freeze'

var state1 = 'ALL'
var state2 = 'COMPLETED'
var state3 = 'PENDING'

deepfreeze(state1)
deepfreeze(state2)

it('changes visibility', () => {
    expect(
        visibilityReducer(state1, { type: 'SHOW_COMPLETED' })
    ).toEqual(state2)

    expect(
        visibilityReducer(state2, { type: 'SHOW_PENDING' })
    ).toEqual(state3)
})

console.log('all tests passed!')