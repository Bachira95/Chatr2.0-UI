import React, { Component } from "react";

import { connect } from "react-redux";
import { render } from "react-dom";

class SuperSecretPage extends Component {
  // if (user) return <Redirect to="/private" />;

  render() {
    let channelLinks = "";
    if (this.props.channels)
      channelLinks = this.props.channels.map(channel => (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={channel.image_url}
            className="card-img-top"
            alt="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          />
          <p className="card-text">{channel.name}</p>
        </div>
      ));
    return <div>{channelLinks}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.channelsState.channels
  };
};

export default connect(mapStateToProps)(SuperSecretPage);
