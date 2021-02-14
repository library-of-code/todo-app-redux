import visibilityReducer from './visibilityReducer'
import expect, { any } from 'expect'
import deepfreeze from 'deep-freeze'

var state_before1 = { todos1: [], visibility: 'SHOW_ALL' }
var state_before2 = { todos2: [], visibility: 'SHOW_COMPLETED' }

var state_after1 = { todos1: [], visibility: 'SHOW_COMPLETED' }
var state_after2 = { todos2: [], visibility: 'SHOW_LEFT' }


deepfreeze(state_before1)
deepfreeze(state_before2)

expect(
    visibilityReducer(state_before1, { type: 'SHOW_COMPLETED' })
).toEqual(state_after1)

expect(
    visibilityReducer(state_before2, { type: 'SHOW_LEFT' })
).toEqual(state_after2)

console.log('all tests passed!')