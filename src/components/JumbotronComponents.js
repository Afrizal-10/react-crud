import React from "react";
import {Container, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

// const element =/>;

function JumbotronExample({title}) {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <Container>
        <h1 className="display-4">Selamat Datang!{title}</h1>
        <p className="lead">
          "Aplikasi CRUD dengan fitur tambah, edit, hapus, dan lihat data secara
          realtime."
        </p>
        <hr className="my-4" />
        <Button variant="dark" href="#learn-more">
          {" "}
          <FontAwesomeIcon icon={faInfo} />
          Learn more
        </Button>
      </Container>
    </div>
  );
}

export default JumbotronExample;
