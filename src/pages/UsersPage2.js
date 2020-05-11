import React from "react";
import { connect } from "react-redux";
import UsersList from "../components/UsersList";
import UserInput from "../components/UserInput";

const UsersPage = props => {
  return (
    <React.Fragment>
      {/* <UserInput addUser={props.addUser} /> */}
      <UsersList users={props.users} deleteUser={props.deleteUser} />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch({ type: "ADD_USER", name }),
  deleteUser: id => dispatch({ type: "DELETE_USER", id })
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
