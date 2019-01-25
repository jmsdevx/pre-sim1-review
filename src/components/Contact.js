import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      post: "",
      posts: []
    };
    this.postinfo = this.postinfo.bind(this);
  }

  // componentDidMount(){

  // }

  changeHandler(value, id) {
    this.setState({ [id]: value });
  }

  postinfo() {
    axios
      .post("/api/post", {
        username: this.state.username,
        post: this.state.post
      })
      .then(response => {
        this.setState({ posts: response.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={e => this.changeHandler(e.target.value, "username")}
        />
        <input
          type="text"
          placeholder="post"
          value={this.state.post}
          onChange={e => this.changeHandler(e.target.value, "post")}
        />
        <button onClick={this.postinfo}>post</button>
      </div>
    );
  }
}

export default Contact;
