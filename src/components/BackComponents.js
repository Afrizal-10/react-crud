import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const BackComponents = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button
            variant="dark"
            size="sm"
            className="d-inline-flex align-items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
            Kembali
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponents;
