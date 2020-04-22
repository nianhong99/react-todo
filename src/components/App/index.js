/**
 * @Description: Do not edit
 * @Author: 年红
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 年红
 * @LastEditTime: 2020-04-22 11:19:29
 */
import React, { Component } from "react";
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import Footer from "../Footer";

class App extends React.Component { 
  constructor(props){
    super(props);
    this.state ={
      todos: [],
      filter: 'all'
    }
    this.nextTodoId = 0; // 普通变量
  }

  getVisibleTodos = () =>{
    const currentFilter = this.state.filter;
    return this.state.todos.filter((item)=>{
      if(currentFilter === 'active'){
        // 未完成，item.completed = false
        return !item.completed;
      }else if(currentFilter === 'completed'){
        // 已完成，item.completed = true
        return item.completed;
      }else{
        return true;
      }
    })
  }

  addTodo = (text) => {
    const todo  = {
      id: this.nextTodoId++,
      text,
      completed: false  // 新增：【默认“未完成”】
    };
    const newTodos = [todo, ...this.state.todos]; // 将【新增数据】、【原来数据】进行合并
    this.setState({
      todos: newTodos
    })
  }

  /* 修改待办事项  */
  toggleTodo = id =>{
    const newTodos = this.state.todos.map(item=>{
      return item.id === id ?{...item, completed: !item.completed}: item
    })
    this.setState({
      todos: newTodos
    })
  }

  /* 修改筛选条件 */
  setVisibilityFilter = filter =>{
    this.setState({
      filter 
    })
  }

  render() {
    const todos = this.getVisibleTodos();
    const  {filter} = this.props;
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={todos} toggleTodo={this.toggleTodo}/>
        <Footer filter={this.state.filter} setVisibilityFilter={this.setVisibilityFilter}/>
      </div>
    );
  }
}
export default App;
