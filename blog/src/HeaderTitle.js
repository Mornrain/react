import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoApp from "./TodoApp";
import { Button, DatePicker, version } from 'antd'

function HeaderTitle (){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/todolist">TodoList</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/users">Users</Link>
                        </li>
                        
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s andrenders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/todolist">
                        <Todo />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    
}

function Todo() {
    let todoItems = [];
    return <TodoApp todoItems = {todoItems} initItems={todoItems}/>
  }
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
  

export default HeaderTitle;