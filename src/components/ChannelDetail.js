import React, { Component } from "react";
import { fetchMessages, sendMessage } from "../redux/actions";
// Components
import Message from "./Message";
import { connect } from "react-redux";
import { CLEAR_MESSAGES } from "../redux/actions/actionTypes";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import {
  faSmileBeam,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ChannelDetail extends Component {
  state = {
    message: ""
  };
  SetLiveInterval() {
    this.myInterval = setInterval(() => {
      const messages = this.props.messages;
      let timestamp = "";
      if (messages.length) timestamp = messages[messages.length - 1].timestamp;
      this.props.getMessages(this.props.match.params.channelID, timestamp);
    }, 3000);
  }
  componentDidMount() {
    this.SetLiveInterval();
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  componentDidUpdate(preProps) {
    if (this.props.match.params.channelID !== preProps.match.params.channelID) {
      // this.props.getMessages(this.props.match.params.channelID);
      this.props.clareMessages();
      clearInterval(this.myInterval);
      this.SetLiveInterval();
    }
  }

  changeHandler = e => this.setState({ [e.target.name]: e.target.value });

  submitMessage = event => {
    event.preventDefault();
    if (this.state.message) {
      this.props.sendMessage(this.props.match.params.channelID, this.state);
      this.setState({ message: "" });
    }
  };

  // to handleEmoji
  addEmoji = e => {
    const message = this.state.message;
    this.setState({ message: message + ` ${e.native}` });
    this.setState({ showemoji: !this.state.showemoji });
  };

  render() {
    const { messages } = this.props;
    let messageList = "";

    if (messages) {
      messageList = messages.map(msg => (
        <Message msg={msg} username={this.props.user.username} keyid={msg.id} />
      ));
    }

    return (
      <div className="channel">
        <h1>** {this.props.match.params.channelName}</h1>
        <div
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            position: "relative",
            maxHeight: "380px",
            marginTop: "15px",
            opacity: 0.9
          }}
        >
          {messageList}
          <br></br>
        </div>
        <form onSubmit={this.submitMessage}>
          <div className="input-group  mt-3">
            <div className="input-group-prepend "></div>
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
              onChange={this.changeHandler}
              value={this.state.message}
            />

            <button className="btn" type="button" onClick={this.submitMessage}>
              <img
                src="https://img.icons8.com/nolan/48/filled-sent.png"
                alt="send"
              />
            </button>
            <div className="row ml-3">
              <FontAwesomeIcon
                icon={faSmileBeam}
                onClick={() =>
                  this.setState({ showemoji: !this.state.showemoji })
                }
                style={{ width: "40px", height: "40px", color: "yellow" }}
              />
            </div>
          </div>
          <div
            style={{
              float: "left",
              position: "absolute",
              zIndex: 9,
              top: "200px",
              right: "50px"
            }}
          >
            {this.state.showemoji ? <Picker onSelect={this.addEmoji} /> : ""}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.channelState.messages,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clareMessages: () => dispatch({ type: CLEAR_MESSAGES }),
    getMessages: (channelID, timestamp) =>
      dispatch(fetchMessages(channelID, timestamp)),
    sendMessage: (channelID, newMessage) =>
      dispatch(sendMessage(channelID, newMessage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);
