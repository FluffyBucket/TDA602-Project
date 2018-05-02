import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: "",
        }
    }

    handleChange = e => {
        //e.preventDefault()
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        console.log(this.state,this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='search' type='text' placeholder='Search here....' onChange={this.handleChange}/>
                </form>
                <p>You searched for {this.state.search}</p>
                <Result/>

            </div>
        );
    }
}

class Result extends Component {

    render() {
        return (
            <div>
                Some text
            </div>
        )
    }
}

