/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-22 11:23:13
 */
import React, { Component } from "react";
import moduleName from "module";
class Footer extends React.Component {
  render() {
    const { filter, setVisibilityFilter } = this.props;
    return (
      <div>
        <span>show:</span>
        <button
          disabled={filter === "all"}
          onClick={() => {
             /*  【子组件】向【父组件】传值，注意：setVisibilityFilter是一个方法，'all'是要传递给【父组件的“值”】*/
            setVisibilityFilter("all");
          }}
        >
          All
        </button>
        <button
          disabled={filter === "active"}
          onClick={() => {
             /*  【子组件】向【父组件】传值，注意：setVisibilityFilter是一个方法，'active'是要传递给【父组件的“值”】*/
            setVisibilityFilter("active");
          }}
        >
          active
        </button>
        <button
          disabled={filter === "completed"}
          onClick={() => {
             /*  【子组件】向【父组件】传值，注意：setVisibilityFilter是一个方法，'completed'是要传递给【父组件的“值”】*/
            setVisibilityFilter("completed");
          }}
        >
          completed
        </button>
      </div>
    );
  }
}
export default Footer;
