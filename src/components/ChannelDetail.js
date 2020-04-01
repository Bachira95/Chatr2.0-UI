import React, { Component } from "react";
import { fetchMessages, sendMessage } from "../redux/actions";
// Components

import { connect } from "react-redux";

class ChannelDetail extends Component {
  state = {
    message: ""
  };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.props.getMessages(this.props.match.params.channelID);
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  componentDidUpdate(preProps) {
    if (this.props.match.params.channelID !== preProps.match.params.channelID) {
      this.props.getMessages(this.props.match.params.channelID);
      clearInterval(this.myInterval);
    }
  }

  ChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  submitMessage = event => {
    event.preventDefault();
    if (this.state.message) {
      this.props.sendMessage(this.props.match.params.channelID, this.state);
      this.setState({ message: "" });
    }
  };
  render() {
    const { channel } = this.props;
    let messages = "";

    if (channel) {
      messages = channel.map(msg => (
        <div>
          {" "}
          <br></br>
          {this.props.user.username !== msg.username ? (
            <div
              className="speech-bubble-ds"
              style={{ width: 500, marginLeft: "270px" }}
            >
              <div className="card-body" key={msg.id}>
                {msg.username} : {msg.message}
              </div>
            </div>
          ) : (
            <div
              className="speech-bubble-ds-other"
              style={{ width: 500, marginLeft: "300px" }}
            >
              <div className="card-body" key={msg.id}>
                {msg.username} : {msg.message}
              </div>
            </div>
          )}
        </div>
      ));
    }

    return (
      <div className="channel">
        <h1 className="">## {this.props.match.params.channelName}</h1>
        <div
          style={{
            overflowY: "scroll",
            position: "relative",
            maxHeight: "500px",
            marginTop: "15px",
            opacity: 0.9
          }}
        >
          {messages}
          <br></br>
        </div>
        <form onSubmit={this.submitMessage}>
          <div className="input-group mb-3">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              name="message"
              style={{
                maxWidth: "25rem",
                height: "50px",
                marginLeft: "300px",
                position: "center"
              }}
              onChange={this.ChangeHandler}
              value={this.state.message}
            />
            <button className="btn" type="button" onClick={this.submitMessage}>
              <img
                src="https://img.icons8.com/nolan/48/filled-sent.png"
                alt="send"
              />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channel: state.channelState.channel,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: channelID => dispatch(fetchMessages(channelID)),
    sendMessage: (channelID, newMessage) =>
      dispatch(sendMessage(channelID, newMessage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
