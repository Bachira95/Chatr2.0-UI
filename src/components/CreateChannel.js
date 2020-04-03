import React, { Component } from "react";
import { createChannel, setErrors, fetchChannels } from "../redux/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class CreateChannel extends Component {
  state = {
    name: "",
    toggal: false
  };
  // ADD imgURL whrn create channel
  changeHandler = e => this.setState({ [e.target.name]: e.target.value });
  submitChannel = event => {
    event.preventDefault();
    if (this.state.name) {
      this.props.createChannel({ name: this.state.name });

      this.props.getChannels();
      this.setState({ name: "" });
      this.setState({ toggal: true });
    }
  };

  render() {
    if (this.state.toggal)
      return (
        <div>
          {" "}
          <span className="nav-link-text mr-2">Channels</span>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
      );
    return (
      <div className="container">
        <form onSubmit={this.submitChannel}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.changeHandler}
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
    getChannels: () => dispatch(fetchChannels())
  };
};

export default connect(null, mapDispatchToProps)(CreateChannel);
