"use strict";
exports.__esModule = true;
var expect_1 = require("expect");
var todosReducer_1 = require("./todosReducer");
var state1 = [
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
];
var state2 = [
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
];
var state3 = [
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
];
// TESTS
/**
 * ADD TODO
 */
expect_1["default"](todosReducer_1["default"](state1, { type: 'ADD_TODO', task: 'ASDF' })).toEqual(state2);
/**
 * REMOVE TODO
 */
expect_1["default"](todosReducer_1["default"](state2, { type: 'REMOVE_TODO', id: 3 })).toEqual(state1);
/**
 * TOGGLE TODO
 */
expect_1["default"](todosReducer_1["default"](state2, { type: 'TOGGLE_TODO', id: 3 })).toEqual(state3);
/**
 * TOGGLE TODO
 */
expect_1["default"](todosReducer_1["default"](state3, { type: 'TOGGLE_TODO', id: 3 })).toEqual(state2);
console.log('all tests passed!');
