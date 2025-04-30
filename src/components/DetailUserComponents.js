import React from "react";
import {connect} from "react-redux";
import {getUsersDetail} from "../actions/userAction";
import {Table} from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};
const DetailUserComponents = (props) => {
  return (
    <div>
      <Table striped>
        <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.nama}</td>
          </tr>
          <tr>
            <td width="200">Alamat</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.alamat}</td>
          </tr>
          <tr>
            <td width="200">No.Hp</td>
            <td width="10">:</td>
            <td>{props.getUsersDetail.nohp}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponents);
