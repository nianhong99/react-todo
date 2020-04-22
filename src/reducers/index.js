/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 2020-04-08 11:17:20
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-08 13:57:20
 */

import { combineReducer } from "redux";
import todos from "./todos";
import filter from "./filter";
import text from "./text";


export default combineReducer({
    todos,
    text,
    filter
})