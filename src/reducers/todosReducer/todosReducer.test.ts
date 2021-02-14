import expect from 'expect';
import todosReducer from './todosReducer';

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

const state4 = [
    {
        id: 1,
        completed: false,
        task: "ABCD"
    },
    {
        id: 3,
        completed: false,
        task: "ASDF"
    }
]

it('add todo', () => {
    /**
     * ADD TODO
     */
    expect(
        todosReducer(state1, { type: 'ADD_TODO', task: 'ASDF' })
    ).toEqual(state2)
})

it('remove todo', () => {
    /**
     * REMOVE TODO
     */
    expect(
        todosReducer(state2, { type: 'REMOVE_TODO', id: 3 })
    ).toEqual(state1)

    expect(
        todosReducer(state2, { type: 'REMOVE_TODO', id: 2 })
    ).toEqual(state4)
})

it('toggle todo', () => {
    /**
     * TOGGLE TODO
     */
    expect(
        todosReducer(state2, { type: 'TOGGLE_TODO', id: 3 })
    ).toEqual(state3)

    expect(
        todosReducer(state3, { type: 'TOGGLE_TODO', id: 3 })
    ).toEqual(state2)
})