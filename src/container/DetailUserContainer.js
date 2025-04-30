import React, {Component} from "react";
import {Container} from "react-bootstrap";
import BackComponents from "../components/BackComponents";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getUsersDetail} from "../actions/userAction";
import DetailUserComponents from "../components/DetailUserComponents";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponents />
        <h1>Detail User</h1>
        <DetailUserComponents />
      </Container>
    );
  }
}
export default withParams(connect()(DetailUserContainer));
