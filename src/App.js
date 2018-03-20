import React, { Component } from 'react';
import {connect} from "react-redux";
import logo from './logo.svg';
import './App.css';
import {fetchUsers} from "./actions/user.action";
import {fetchUserDetail} from "./actions/userDetail.action";

class App extends Component {

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    userClick = (url)=>
    {
        this.props.fetchUserDetail(url);
    };

    render() {
        const {users,userDetail} = this.props;
        const mapped_users = users.data.results.map(user =>
            <li key={user.url}>
                <a href="javascript:void(0)" onClick={()=>this.userClick(user.url)}>
                    {user.name}
                </a>
            </li>
        );
        // console.log(users.data.results);
        return (
            <div>
                <div>
                    {
                        users.fetching?
                            <p>Loading</p>
                            :
                            <ul>
                                {mapped_users}
                            </ul>
                    }
                </div>
                <div>
                    {
                        userDetail.data==null || userDetail.fetching?
                        (
                            <div></div>
                        ):
                        (
                            <div>{userDetail.data.name}</div>
                        )
                    }

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>
{
  return{
      fetchUsers : ()=> dispatch(fetchUsers()),
      fetchUserDetail : (url) => dispatch(fetchUserDetail(url))
  }
};

const mapStateToProps = (state)=>
{
    return{
        users : state.user,
        userDetail : state.userDetail
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
