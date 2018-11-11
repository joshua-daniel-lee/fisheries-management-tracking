import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container section">
        <div className="card z-depth-3">
          <div className="card-content">
            <form className="white" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Create a New Project</h5>
              <div className="input-field">
                <input type="text" id="title" onChange={this.handleChange} />
                <label htmlFor="title">Project Title</label>
              </div>
              <div className="input-field">
                <textarea
                  id="content"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                />
                <label htmlFor="content">Project Content</label>
              </div>
              <div className="input-field">
                <button className="btn green">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
