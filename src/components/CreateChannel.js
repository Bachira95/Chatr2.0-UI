import React, { Component } from "react";
import { createChannel, setErrors, fetchChannels } from "../redux/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom"; // <-- not being used

class CreateChannel extends Component {
  // no image_url field for the new channel?
  state = {
    name: ""
  };
  // changeHandler not ChangeHandler
  ChangeHandler = e => this.setState({ [e.target.name]: e.target.value });
  submitChannel = event => {
    event.preventDefault();
    if (this.state.name) {
      this.props.createChannel(this.state);

      this.props.getChannels();
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitChannel}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.ChangeHandler}
              value={this.state.name}
            />

            <button onClick={this.submitChannel}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChannel: newChannel => dispatch(createChannel(newChannel)),
    setErrors: () => dispatch(setErrors()), // <-- not being used
    getChannels: () => dispatch(fetchChannels())
  };
};

export default connect(null, mapDispatchToProps)(CreateChannel);
