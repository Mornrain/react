import React from 'react';
import './TodoApp.css';
import { Button, Form, Input, DatePicker, version } from 'antd'



class TodoList extends React.Component {
  render() {
    // console.log(this.props.items);
    var items = this.props.items.map((item, index, date) => {
      return (
        <TodoListItem key = {index} item = {item} index = {index} 
              removeItem = {this.props.removeItem} markTodoDone = {this.props.markTodoDone}/>
      );
      // console.log(items);
    });
    return (
      <ul className = "list-group"> {items} </ul>
    );
  }
}

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
    this.doneTime = new Date()
    this.doneTime = this.doneTime.toLocaleString()
  }
  render () {
    let todoClass = this.props.item.done ? "done" : "undone";
    let todoIcon = this.props.item.done ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove";
    let finishedTime = this.props.item.done ? "finished" : "unfinished";

    return (
      <li className = "list-group-item">
        <div className = "">
          <div className = "inline">
            <span className = {todoIcon +" " + todoClass + " icon-inline"} aria-hidden = "true"
                  onClick = {this.onClickDone}></span>
            <div className={todoClass + " inline"}>{this.props.item.value}</div>
            <div className="">Create Time: {this.props.item.date}</div>
            <div className={finishedTime}>Finished Time: {this.doneTime}</div>
          </div>
          <button type="button" className="close close-inline" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super (props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();       //网页新打开时聚焦于此（可以依此拓展合成事件：https://zh-hans.reactjs.org/docs/events.html）
  }
  onSubmit(event) {
    // event.preventDefault();             //阻止表单的默认提交行为
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <Form ref="form" onFinish={this.onSubmit} className="form-inline">
        <Form.Item>
        <Input type="text" ref="itemName" className="form-control"
              placeholder="add a new todo..." />
        </Form.Item>
        

        <div className="App">
          <Button type="primary" htmlType="submit" className="btn btn-default" style={{ marginLeft: 0}}> Primary Button</Button>
        </div>


        <button type="submit" className="btn btn-default">Add</button>
      </Form>
    );
  }
}


class TodoHeader extends React.Component {
  render() {
    return  <h1>Todo List</h1>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.todoItems = this.props.todoItems;
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: this.todoItems};
  }
  
  addItem(todoItem){
    let nowDate = new Date()
    this.todoItems.unshift({
      index: this.todoItems.length + 1,
      value: todoItem.newItemValue,
      date: nowDate.toLocaleString(),
      done: false
    });
    this.setState({todoItems: this.todoItems});
  }

  removeItem(itemIndex) {
    this.todoItems.splice(itemIndex, 1);
    this.setState({todoItems: this.todoItems});
  }

  markTodoDone(itemIndex) {
    var todo = this.todoItems[itemIndex];
    // this.todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    // todo.done ? this.todoItems.push(todo) : this.todoItems.unshift(todo);
    this.setState({todoItems: this.todoItems});
  }
  
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem}
        markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default TodoApp;
























































// import React from 'react';
// import './TodoApp.css';
// import { Button, DatePicker, version } from 'antd'



// class TodoList extends React.Component {
//   render() {
//     // console.log(this.props.items);
//     var items = this.props.items.map((item, index, date) => {
//       return (
//         <TodoListItem key = {index} item = {item} index = {index} 
//               removeItem = {this.props.removeItem} markTodoDone = {this.props.markTodoDone}/>
//       );
//       // console.log(items);
//     });
//     return (
//       <ul className = "list-group"> {items} </ul>
//     );
//   }
// }

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onClickClose = this.onClickClose.bind(this);
//     this.onClickDone = this.onClickDone.bind(this);
//   }
//   onClickClose() {
//     var index = parseInt(this.props.index);
//     this.props.removeItem(index);
//   }
//   onClickDone() {
//     var index = parseInt(this.props.index);
//     this.props.markTodoDone(index);
//     this.doneTime = new Date()
//     this.doneTime = this.doneTime.toLocaleString()
//   }
//   render () {
//     let todoClass = this.props.item.done ? "done" : "undone";
//     let todoIcon = this.props.item.done ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-remove";
//     let finishedTime = this.props.item.done ? "finished" : "unfinished";

//     return (
//       <li className = "list-group-item">
//         <div className = "">
//           <div className = "inline">
//             <span className = {todoIcon +" " + todoClass + " icon-inline"} aria-hidden = "true"
//                   onClick = {this.onClickDone}></span>
//             <div className={todoClass + " inline"}>{this.props.item.value}</div>
//             <div className="">Create Time: {this.props.item.date}</div>
//             <div className={finishedTime}>Finished Time: {this.doneTime}</div>
//           </div>
//           <button type="button" className="close close-inline" onClick={this.onClickClose}>&times;</button>
//         </div>
//       </li>
//     );
//   }
// }

// class TodoForm extends React.Component {
//   constructor(props) {
//     super (props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   componentDidMount() {
//     this.refs.itemName.focus();       //网页新打开时聚焦于此（可以依此拓展合成事件：https://zh-hans.reactjs.org/docs/events.html）
//   }
//   onSubmit(event) {
//     event.preventDefault();             //阻止表单的默认提交行为
//     var newItemValue = this.refs.itemName.value;

//     if (newItemValue) {
//       this.props.addItem({newItemValue});
//       this.refs.form.reset();
//     }
//   }
//   render() {
//     return (
//       <form ref="form" onSubmit={this.onSubmit} className="form-inline">
//         <input type="text" ref="itemName" className="form-control"
//               placeholder="add a new todo..." />

   

//         <button type="submit" className="btn btn-default">Add</button>
//       </form>
//     );
//   }
// }


// class TodoHeader extends React.Component {
//   render() {
//     return  <h1>Todo List</h1>;
//   }
// }

// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.todoItems = this.props.todoItems;
//     this.addItem = this.addItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//     this.markTodoDone = this.markTodoDone.bind(this);
//     this.state = {todoItems: this.todoItems};
//   }
  
//   addItem(todoItem){
//     let nowDate = new Date()
//     this.todoItems.unshift({
//       index: this.todoItems.length + 1,
//       value: todoItem.newItemValue,
//       date: nowDate.toLocaleString(),
//       done: false
//     });
//     this.setState({todoItems: this.todoItems});
//   }

//   removeItem(itemIndex) {
//     this.todoItems.splice(itemIndex, 1);
//     this.setState({todoItems: this.todoItems});
//   }

//   markTodoDone(itemIndex) {
//     var todo = this.todoItems[itemIndex];
//     // this.todoItems.splice(itemIndex, 1);
//     todo.done = !todo.done;
//     // todo.done ? this.todoItems.push(todo) : this.todoItems.unshift(todo);
//     this.setState({todoItems: this.todoItems});
//   }
  
//   render() {
//     return (
//       <div id="main">
//         <TodoHeader />
//         <TodoList items={this.props.initItems} removeItem={this.removeItem}
//         markTodoDone={this.markTodoDone}/>
//         <TodoForm addItem={this.addItem} />
//       </div>
//     );
//   }
// }

// export default TodoApp;