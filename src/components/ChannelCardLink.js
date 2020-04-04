import React from "react";
import { NavLink } from "react-router-dom";

const ChannelCardLink = ({ channel }) => (
  <div className="col-3 ml-3 mb-4 mt-6 mr-4 ">
    <div
      className="card border-55 card-5"
      style={{ width: "18rem", height: "21rem" }}
      key={channel.id}
    >
      {channel.image_url ? (
        <img
          src={channel.image_url}
          className="card-img-top"
          alt=">>"
          width="30px"
          height="260px"
        />
      ) : (
        <img
          src="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          className="card-img-top"
          alt=">>"
        />
      )}

      <NavLink
        className="nav-link"
        to={`/channels/${channel.id}/${channel.name}`}
      >
        <h4 className="card-text">
          <font color="black">{channel.name}</font>
        </h4>
      </NavLink>
    </div>
  </div>
);

export default ChannelCardLink;
