import React from "react";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ChannelNavLink = ({ channel }) => (
  <li
    className="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    name={channel.name}
  >
    <NavLink
      className="nav-link"
      to={`/channels/${channel.id}/${channel.name}`}
    >
      <FontAwesomeIcon icon={faHashtag} />
      <span className="nav-link-text ml-2">
        <font> {channel.name}</font>
      </span>
    </NavLink>
  </li>
);

export default ChannelNavLink;
