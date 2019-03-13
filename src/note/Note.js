import React, { Component } from 'react';
import './Note.css';
class Note extends Component{

    constructor(props){
        super(props);
        this.todoContent = props.todoContent;
        this.todoId = props.todoId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);

    }

    handleRemoveNote(id){
        this.props.removeTodo(id);
    }


    render(props){
        return(
            <div className="note fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveNote(this.todoId)}>
                      REMOVE
                </span>
                <p className="noteContent">{ this.todoContent }</p>
            </div>
        )
    }
}


export default Note;