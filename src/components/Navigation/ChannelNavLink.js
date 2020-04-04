import React from "react";
import { NavLink } from "react-router-dom";

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
      <span className="nav-link-text ml-2">
        <font> {channel.name}</font>
      </span>
      {channel.image_url ? (
        <img
          className="circular--square "
          src={channel.image_url}
          width="25"
          height="25"
          alt={channel.name}
        />
      ) : (
        <img
          className="circular--square "
          src="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          width="25"
          height="25"
          alt="img_url"
        />
      )}
    </NavLink>
  </li>
);
// {/* <FontAwesomeIcon icon={faHashtag} /> */}
export default ChannelNavLink;
