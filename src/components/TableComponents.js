import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faInfo,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "../custom.css";

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponents = ({getUsersList}) => {
  const [search, setSearch] = useState("");
  const users = getUsersList || [];

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return {width: "80px"};
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "nohp",
      text: "No.Hp",
      sort: true,
    },
    {
      dataField: "action",
      text: "Action",

      formatter: (rowContent, row) => {
        return (
          <div className="d-flex gap-2">
            <Link to={"detail/" + row.id}>
              <Button
                variant="dark"
                size="sm"
                className="d-inline-flex align-items-center"
              >
                <FontAwesomeIcon icon={faInfo} className="me-1" />
                Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button
                variant="dark"
                size="sm"
                className="d-inline-flex align-items-center"
              >
                <FontAwesomeIcon icon={faEdit} className="me-1" />
                Edit
              </Button>
            </Link>

            <Button
              variant="dark"
              size="sm"
              className="d-inline-flex align-items-center"
            >
              <FontAwesomeIcon icon={faTrash} className="me-1" />
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const options = {
    sizePerPage: 5,
    hideSizePerPage: false,
    hidePageListOnlyOnePage: true,
  };

  return (
    <Container className="my-4">
      <Form.Group className="mb-3">
        <Form.Label>Cari Data :</Form.Label>
        <Row>
          <Col>
            <Link to="/create">
              <Button
                variant="dark"
                size="sm"
                className="d-inline-flex align-items-center"
              >
                <FontAwesomeIcon icon={faUser} className="me-1" />
                Tambah
              </Button>
            </Link>
          </Col>
          <Col>
            <Form.Control
              className="w-50 float-end"
              type="text"
              placeholder="Cari berdasarkan apapun..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>

      <BootstrapTable
        bootstrap4
        keyField="id"
        data={filteredUsers}
        columns={columns}
        defaultSorted={[{dataField: "id", order: "asc"}]}
        pagination={paginationFactory(options)}
      />
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponents);
