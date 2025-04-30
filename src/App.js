import React, {Component} from "react";
import NavbarComponents from "./components/NavbarComponents";
import JumbotronComponents from "./components/JumbotronComponents";
// import TableComponents from "./components/TableComponents";
import {Button, Container} from "react-bootstrap";
import HomeContainer from "./container/HomeContainer";
import CreateUserContainer from "./container/CreateUserContainer";
import EditUserContainer from "./container/EditUserContainer";
import DetailUserContainer from "./container/DetailUserContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faEdit, faInfo, faTrash} from "@fortawesome/free-solid-svg-icons";
// import JumbotronComponents from "./components/HeroSection";

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavbarComponents />
          <JumbotronComponents />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/create" element={<CreateUserContainer />} />
              <Route path="/detail/:id" element={<DetailUserContainer />} />
              <Route path="/edit/:id" element={<EditUserContainer />} />
            </Routes>
          </BrowserRouter>
          {/* <TableComponents users={this.state.users} /> */}
        </Container>
      </div>
    );
  }
}
