import React, { Component } from 'react';
import Note from './note/Note';
import NoteForm from './noteFrom/NoteForm';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter, Route,Link} from "react-router-dom"
import Login from "./Login"

class todoApp extends Component {
    constructor(){
        super();
        this.state = {
            auth:false,
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.database = firebase.database().ref().child('notes');
        this.removeTodo=this.removeTodo.bind(this)
    }

    componentWillMount() {

        this.removeAuthListener=firebase.auth().onAuthStateChanged((user)=>
        {
            if(user) {
                this.setState({
                    auth: true
                })
            }else
            {
                this.setState({
                    auth: false
                })
            }
        })

        const lastTodo = this.state.todos;

        this.database.on('child_added', snap => {
            lastTodo.push({
                id: snap.key,
                todoContent: snap.val().todoContent,
            })

            this.setState({
                todos: lastTodo
            })
        })
        this.database.on("child_removed",snap=>{
            for(var x=0; x<lastTodo.length;x++)
            {
                if(lastTodo[x].id===snap.key){
                    lastTodo.splice(x,1);
                }
            }
            this.setState({
                todos: lastTodo
            })
        })
    }

    addTodo(todo){
        this.database.push().set({todoContent: todo});
    }
    removeTodo(todoId){
        this.database.child(todoId).remove();
    }
    render()
    {
        if(this.state.auth) {
            return (
                <BrowserRouter>
                    <div>
                        <Route exact path={"/Login"} component={Login}/>
                        <div>
                            <div>
                                <div>
                                    <Navbar/>
                                </div>
                                <div className="todoBody">
                                    {
                                        this.state.todos.map((todo) => {
                                            return (
                                                <Note todoContent={todo.todoContent}
                                                      todoId={todo.id}
                                                      key={todo.id}
                                                      removeTodo={this.removeTodo}/>
                                            )
                                        })
                                    }
                                </div>
                                <div className={"container"}>
                                    <NoteForm addTodo={this.addTodo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
        else {
            return(
                <div>
                    <Link className={"btn"} to={"./Login"}>Login or Register</Link>

                </div>
        )
        }
    }
    componentWillUnmount() {
        this.removeAuthListener();
    }

}

export default todoApp;
