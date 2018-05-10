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

    componentWillMount(){
        this.refreshComments()
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    addComment = comment => {
        //alert('A name was submitted: ' + this.state.value);
        fetch('http://localhost:3003/addcomment/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: '',
                body: comment,
            })
        });
        this.refreshComments()
    }

    refreshComments = e => {
        fetch('http://localhost:3003/getcomment/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ store: data })
            })
    }

    render() {

        return (
            <div>
                <Search />
                <div><button onClick={this.refreshComments}>Refresh</button></div>
                <Comments comments={this.state.store} addComment={this.addComment}/>
            </div>
        );
    }
}

export default App;
