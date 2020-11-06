import React, { Component } from 'react';

import "./todo.css"

class Todo extends Component {
    state = { 
        todos: [], 
        todoText:"" 
    };

    render() { 
        return ( 
            <div>
                <h5>Simple todo app</h5>
                <div>
                    <input type="text" onChange={this.handleTextChange} value={this.state.todoText} placeholder="Todo text"></input>
                    <button onClick={this.buttonClicked}>Add</button>                
                </div>

                <div className="todoList">
                    <ul>
                        {this.state.todos.map((text) => <li key={text}>{text}</li> ) }
                    </ul>
                </div>

                
            </div>
         );
    }

    buttonClicked=() => {
        //console.log(this.state.todoText);
        
        //var lista =this.state.todos;
        var lista =[...this.state.todos]; //clone fard copy

        lista.push(this.state.todoText);
        
        this.setState({todos: lista, todoText: ""});


        
    }


    handleTextChange = (event) =>{
        this.setState({ todoText: event.target.value });

    } 


}
 
/*const mapTodoList (state) => {
    return{
        todoList: state.todos
    }
};*/


//export default connect(mapTodoList, { todoActionAdd })(Todo);
export default Todo;

/*

-1-click on button
-2-console log the text from the state
-3-push that text into state array
-4-clear the input (clear the state.todoText)
-5-map the states todos to list

*/