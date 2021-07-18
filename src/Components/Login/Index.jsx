import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../Actions/Login";
import loginIds from "../../credential.json";

//assets
import LoginBackGround from "../../Assets/Images/login-page.jpeg";

const Index = ({ login, history }) => {
  useEffect(() => {
    if (localStorage.getItem("logedIn") === "true") {
      history.push("/home");
    }
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitClick = () => {
    loginIds.userList.map((user) => {
      if (user.name === name && user.password === password) {
        localStorage.setItem("logedIn", "true");
        history.push("./home");
      }
    });
  };
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${LoginBackGround})` }}
    >
      <input
        type="text"
        className="text"
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        className="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="submit-button" onClick={onSubmitClick}>
        Submit
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  login: (limit) => dispatch(login(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
