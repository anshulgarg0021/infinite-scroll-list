import React, { useRef, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import { fetchUsers } from "../../../Actions/dashboard";
import loaderGif from "../../../Assets/Images/loaderGif.gif";

const Index = ({ list, fetchUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [flag, setFlag] = useState(false);
  const myscroll = useRef();

  window.onscroll = async () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.scrollHeight - (document.body.scrollHeight / 100) * 10 &&
      !flag &&
      list?.data?.length < 50
      //adding this because API is giving total count as 50
      //but giving data only until 50 otherwise would have checked with total length
    ) {
      // you're at the bottom of the page\
      setFlag(true);
      setLoadMore(true);
      const res = await fetchUsers(list?.data?.length + 10, true);
      if (res === "done") {
        setFlag(false);
        setLoadMore(false);
      }
    }
  };

  return (
    <div className="list-view" ref={myscroll}>
      <h1 className="contacts">Contacts</h1>
      {Array.isArray(list?.data) && list?.data?.length > 0 ? (
        list.data.map((item) => {
          return (
            <div className="list-item">
              <img src={item.picture} alt="User" />
              <p>
                {item.title}. {item.firstName} {item.lastName}
              </p>
            </div>
          );
        })
      ) : (
        <SkeletonTheme color="#ffb3d9" highlightColor="#444">
          <p>
            <Skeleton height={100} count={10} circle={true} />
          </p>
          <img />
        </SkeletonTheme>
      )}
      {loadMore && (
        <div className="tab-loader">
          <img src={loaderGif} alt="Loading..." />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (limit, loadMoreLoader) =>
    dispatch(fetchUsers(limit, loadMoreLoader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
