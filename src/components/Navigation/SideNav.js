import React from "react";

import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";
import CreateChannel from "../CreateChannel";

class SideNav extends React.Component {
  state = { collapsed: false, toggle: false };
  toggleHandler() {
    this.setState({ toggle: true });
  }

  render() {
    let channelLinks = "";
    if (this.props.channels)
      channelLinks = this.props.channels.map(channel => (
        <ChannelNavLink key={channel.id} channel={channel} />
      ));
    console.log(channelLinks);
    return (
      <div>
        {this.props.user && (
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
            >
              <span
                className="nav-link heading"
                onClick={() => this.toggleHandler()}
              >
                {this.state.toggle ? (
                  <CreateChannel />
                ) : (
                  <div>
                    {" "}
                    <span className="nav-link-text mr-2">Channels</span>
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </div>
                )}
              </span>
            </li>
            {/* <div>
                    {" "}
                    <span className="nav-link-text mr-2">Channels</span>
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </div> */}
            {!this.state.collapsed && (
              <div className="scrollbar" id="style-1">
                <div className="force-overflow">{channelLinks}</div>
              </div>
            )}
          </ul>
        )}
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <span
              className="nav-link text-center"
              id="sidenavToggler"
              onClick={() =>
                this.setState(prevState => ({
                  collapsed: !prevState.collapsed
                }))
              }
            >
              <FontAwesomeIcon
                icon={this.state.collapsed ? faAngleRight : faAngleLeft}
              />
            </span>
          </li>
        </ul>
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
// const mapDispatchToProps = dispatch => {
//   return {
//     getChannels: () => dispatch(fetchChannels())
//   };
// };

export default connect(mapStateToProps)(SideNav);
