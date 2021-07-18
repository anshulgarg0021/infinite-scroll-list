import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Actions/dashboard";

//components
import ListView from "../CommonComponents/ListView/Index";

//assets
import ShadiLogo from "../../Assets/Images/shadLogo.jpeg";

const Index = ({ fetchUsers, Dashboard, history }) => {
  useEffect(() => {
    if (localStorage.getItem("logedIn") !== "true") {
      history.push("/");
    }
    fetchUsers(10);
  }, []);

  console.log(Dashboard);
  const loggoutUser = () => {
    localStorage.removeItem("logedIn");
    history.push("/");
  };
  return (
    <div className="home-page">
      <div className="home-header">
        <img src={ShadiLogo} alt={"Shaadi"} />
        <h1 onClick={loggoutUser}>Log Out</h1>
      </div>
      <div className="home-content">
        {Dashboard.showNoData ? (
          <div className="no-Data">No Data</div>
        ) : (
          <ListView list={Dashboard?.data} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (limit) => dispatch(fetchUsers(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
