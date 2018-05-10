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
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.state.comment)
    }

    render() {
        console.log(this.props.comments)
        return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input name='comment' type='text' onChange={this.handleChange}/>
              </form>
              {this.props.comments.length !== 0 ?
                  <div>
                      <div style={{float: "left"}}>
                          <p>This is dangerous</p>
                          {this.props.comments.map((c,k) =>

                            <li key={k} dangerouslySetInnerHTML={{__html: c.body}}/>
                        ) }
                      </div>
                      <div style={{float: "right"}}>
                          <p>This is "safe"</p>
                          {this.props.comments.map((c,k) =>
                              <li key={k}>{c.body}</li>
                          )}
                      </div>
                  </div>
                  :
                  <p>No comments yet :(</p>
              }

          </div>
        );
    }
}

