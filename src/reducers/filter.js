/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-08 13:43:34
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-08 13:53:56
 */
import { SET_FILTER } from '../actions/actionTypes';

const filter = ( state ='all', action) => {
    switch( action.type ){
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter;
