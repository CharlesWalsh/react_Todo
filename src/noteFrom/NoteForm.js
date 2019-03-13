import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTodoContent: '',
        };

        this.inputEvent=this.inputEvent.bind(this)
        this.clickEvent=this.clickEvent.bind(this)
    }

    inputEvent(event){
        this.setState({
            newTodoContent:event.target.value,
        })
    }

    clickEvent(){
        this.props.addTodo(this.state.newTodoContent);
        this.setState({
            newTodoContent:'',
        })
    }
    render(){
        return(
            <div>
                <textarea className={"noteInput"}
                          id={"content"}
                       placeholder="Add a new to do item"
                       value={this.state.newTodoContent}
                        onChange={this.inputEvent}/>
                <button className="waves-effect waves-light btn"
                        onClick={this.clickEvent}>Add Note</button>
            </div>
        )
    }
}
export default NoteForm;