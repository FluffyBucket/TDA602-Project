import React, {Component} from 'react';



export default class Comments extends Component {
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
                    <input name='comment' type='text' onChange={this.handleChange}/>
                </form>
                <p>You searched for {this.state.search}</p>
            </div>
        );
    }
}

