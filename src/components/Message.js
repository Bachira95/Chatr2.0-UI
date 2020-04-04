import React from "react";

const Message = ({ msg, username, keyid }) => {
  return (
    <div key={keyid}>
      {" "}
      <br></br>
      {username !== msg.username ? (
        <div
          className="speech-bubble-ds"
          style={{ width: 500, marginLeft: "270px" }}
        >
          <div className="card-body">
            <font color="white">
              {msg.username} : {msg.message}
            </font>
          </div>
        </div>
      ) : (
        <div
          className="speech-bubble-ds-other"
          style={{ width: 500, marginLeft: "300px" }}
        >
          <div className="card-body">
            {msg.username} : {msg.message}
          </div>
        </div>
      )}
    </div>
  );
};
export default Message;
