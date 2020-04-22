/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-22 11:08:06
 */
import React, { Component } from "react";
import moduleName from "module";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
   
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleClick = () => {
    /* this.props.addTodo  这是【父组件传递过来的“方法”】 */
    // 【子组件】向【父组件】传值，注意：addTodo是一个方法，this.state.text是要传递给【父组件的“值”】
    this.props.addTodo(this.state.text);
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
export default AddTodo;
