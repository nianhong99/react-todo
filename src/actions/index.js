/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-08 10:49:18
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-08 11:14:51
 */

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from './actionTypes.js';

let nextTodoId = 0;


/* 
   新增待办事项 
   @params {*} text
*/
export const addTodo = (text) => ({
    type: ADD_TODO,    // type是必需的
    id: nextTodoId++,
    text: text
})

/* 
   更改待办事项 
   @params {*} id
*/
export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    id
})

/* 
   设置过滤状态 
   @params {*} filter
*/
export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

/* 
   设置新增待办事项的文本 
   @params {*} filter
*/
export const setTodoText = (text) => ({
    type: SET_TODO_TEXT,
    text
})
