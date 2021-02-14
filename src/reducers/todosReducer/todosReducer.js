"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var todoReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return __spreadArrays(state, [AddTodo(action.task)]);
            break;
        case 'REMOVE_TODO':
            __spreadArrays(state.slice(0, 1), state.slice(0, 1));
            break;
        case 'TOGGLE_TODO':
            __spreadArrays(state, [RemoveTodo(action.task)]);
            break;
        default:
            break;
    }
    return state;
};
exports["default"] = todoReducer;
