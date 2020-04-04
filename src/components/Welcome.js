import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const Welcome = ({ user }) => {
  if (user) return <Redirect to="/private" />;
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div class="card text-center">
        <h3>Welcome to Sara & Qaddour TalkAtive Platform</h3>
      </div>
      <div
        class="card text-center mt-3"
        style={{ width: "30rem", marginLeft: "20rem" }}
      >
        <h4> Please Login to start</h4>
      </div>
      <div
        class="card text-center mt-3 border-0 "
        style={{ width: "10rem", marginLeft: "30rem" }}
      >
        <Link to="/login" className="btn special-button ">
          <img
            src="https://img.icons8.com/dusk/64/000000/enter-2.png"
            alt="login"
          />
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Welcome);
