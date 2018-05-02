import React, {Component} from 'react';



export default class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: "",
        }
    }

    handleChange = e => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        this.props.addComment(this.state.comment)
    }

    render() {
        console.log(this.state,this.props)
        return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input name='comment' type='text' onChange={this.handleChange}/>
              </form>
              {this.props.comments.length !== 0 ?
                  this.props.comments.map((c) =>
                    <p>{c}</p>
                    ) :
                  <p>No comments yet :(</p>
              }
              <p>Hello i am comments</p>
          </div>
        );
    }
}

