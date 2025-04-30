import React, {Component} from "react";
import {Container} from "react-bootstrap";
import BackComponents from "../components/BackComponents";
import FormComponents from "../components/FormComponents";
import {connect} from "react-redux";
import {postUsersCreate} from "../actions/userAction";
import {toast, ToastContainer} from "react-toastify";

class CreateUserContainer extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.getResponDataUsers &&
      this.props.getResponDataUsers !== prevProps.getResponDataUsers
    ) {
      toast.success("User berhasil ditambahkan!");
    }
    if (
      this.props.errorResponDataUsers &&
      this.props.errorResponDataUsers !== prevProps.errorResponDataUsers
    ) {
      toast.error("Terjadi kesalahan! Coba lagi.");
    }
  }

  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }

  render() {
    return (
      <Container>
        <BackComponents />
        <h1>Tambah User</h1>
        <FormComponents onSubmit={(data) => this.handleSubmit(data)} />
        <ToastContainer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  getResponDataUsers: state.users.getResponDataUsers,
  errorResponDataUsers: state.users.errorResponDataUsers,
});

export default connect(mapStateToProps)(CreateUserContainer);
