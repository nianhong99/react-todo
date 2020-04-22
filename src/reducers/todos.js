/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-08 13:43:24
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-08 13:50:39
 */

 import {ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT} from '../actions/actionTypes';

 const todos = (state = [], action) =>{

    switch ((action, type)) {
        case ADD_TODO:
            return [
                ...state,
                {
                    // id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
      
        case TOGGLE_TODO:
            return state.map(todo=>{
               return  todo.id === action.id ? {...todo, completed: !todo.completed}: todo
            })
        
        default;
          return state;
      }

 }