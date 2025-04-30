import React, {Component} from "react";
import BackComponents from "../components/BackComponents";
import {Container} from "react-bootstrap";
export default class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponents />
        <h1>Edit User</h1>
      </Container>
    );
  }
}
