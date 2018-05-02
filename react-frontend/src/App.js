import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Comments from "./components/comment/comments";
import Search from "./components/search";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            store: []
        };
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    addComment = comment => {
        //alert('A name was submitted: ' + this.state.value);
        this.state.store.push(comment)
        this.setState({
            store: this.state.store
        })
    }

    render() {

        return (
            <div>
                <Search />
                <Comments comments={this.state.store} addComment={this.addComment}/>
            </div>
        );
    }
}

export default App;
