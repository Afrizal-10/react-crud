import React, {Component} from "react";
import TableComponents from "../components/TableComponents";
import {connect} from "react-redux";
import {deleteUsersDetail, getUsersList} from "../actions/userAction";
class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUsersDetail());
  }
  render() {
    return (
      <div>
        <TableComponents />
      </div>
    );
  }
}
export default connect()(HomeContainer);
