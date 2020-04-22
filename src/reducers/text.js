/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-08 13:43:41
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-08 13:54:54
 */

import { SET_TODO_TEXT } from '../actions/actionTypes';

const text = ( state ='', action) => {
    switch( action.type ){
        case SET_TODO_TEXT:
            return action.text;
        default:
            return state;
    }
}

export default text;
