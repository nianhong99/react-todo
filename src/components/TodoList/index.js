/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-03 16:29:20
 */
import React, { Component } from "react";
import Todo from "../Todo";

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo } = this.props;
    console.log(todos)
    return (
      <div>
        <ul>
          {todos.map((item, index) => {
            return (
              <Todo
                key={index}
                {...item}
                onClick={() => {
                   // 【子组件】向【父组件】传值，注意：toggleTodo是一个方法，item.id是要传递给【父组件的“值”】
                  toggleTodo(item.id);
                }}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
