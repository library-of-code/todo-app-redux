import expect from 'expect';
import todoReducer from './todosReducer';

const state1 = [
    {
        id: 1,
        completed: false,
        task: "ABCD"
    },
    {
        id: 2,
        completed: false,
        task: "CBD"
    }
]

const state2 = [
    {
        id: 1,
        completed: false,
        task: "ABCD"
    },
    {
        id: 2,
        completed: false,
        task: "CBD"
    },
    {
        id: 3,
        completed: false,
        task: "ASDF"
    }
]

const state3 = [
    {
        id: 1,
        completed: false,
        task: "ABCD"
    },
    {
        id: 2,
        completed: false,
        task: "CBD"
    },
    {
        id: 3,
        completed: true,
        task: "ASDF"
    }
]

// TESTS

/**
 * ADD TODO
 */
expect(
    todoReducer(state1, { type: 'ADD_TODO', task: 'ASDF' })
).toEqual(state2)

/**
 * REMOVE TODO
 */
expect(
    todoReducer(state2, { type: 'REMOVE_TODO', id: 3 })
).toEqual(state1)

/**
 * TOGGLE TODO
 */
expect(
    todoReducer(state2, { type: 'TOGGLE_TODO', id: 3 })
).toEqual(state3)

/**
 * TOGGLE TODO
 */
expect(
    todoReducer(state3, { type: 'TOGGLE_TODO', id: 3 })
).toEqual(state2)

console.log('all tests passed!')