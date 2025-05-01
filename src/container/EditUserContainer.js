import React, {Component} from "react";
import BackComponents from "../components/BackComponents";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import FormComponents from "../components/FormComponents";
import {getUsersDetail} from "../actions/userAction";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.params));
  }
  render() {
    return (
      <Container>
        <BackComponents />
        <h1>Edit User</h1>
        <FormComponents />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(EditUserContainer);
