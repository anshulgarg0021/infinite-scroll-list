import React, { useState, useEffect }  from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from "../../Actions/dashboard"

const Index=({fetchUsers,Dashboard})=> {
    useEffect(() => {
        fetchUsers(10);
      },[]);
     
    return (
        <div>
            Index
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
    fetchUsers: (limit) => dispatch(fetchUsers(limit))
   })

export default connect(mapStateToProps,mapDispatchToProps)(Index);