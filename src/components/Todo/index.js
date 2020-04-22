/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-03 16:25:35
 */
import React, { Component } from "react";
import moduleName from "module";
class Todo extends React.Component {
  render() {
    const { completed, text, onClick } = this.props;
    return (
      <li
        onClick={onClick}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
      </li>
    );
  }
}
export default Todo;
