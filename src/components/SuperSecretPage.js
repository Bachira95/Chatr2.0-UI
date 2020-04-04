import React, { Component } from "react";

import { connect } from "react-redux";
import ChnnelCardLink from "./ChannelCardLink";
class SuperSecretPage extends Component {
  render() {
    let channelLinks = "";
    if (this.props.channels)
      channelLinks = this.props.channels
        .filter(channel => channel.owner === this.props.user.username)
        .map(channel => <ChnnelCardLink key={channel.id} channel={channel} />);

    return (
      <div>
        <h1 className="row ml-4 ">Hi {this.props.user.username}</h1>
        <br></br>
        <div className="row ml-4 ">{channelLinks}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.channelsState.channels
  };
};

export default connect(mapStateToProps)(SuperSecretPage);
