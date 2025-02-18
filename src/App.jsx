import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userEdit, setUserEdit] = useState(null);
  // Panggil API
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    getAllData();
  }, []);
  // Menampilkan data
  async function getAllData() {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  }

  // Tambah data
  async function addData(e) {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    const response = await axios.post(API_URL, {name, email});
    setName("");
    setEmail("");
    getAllData();
  }

  // Edit Data
  function editData(data) {
    setUserEdit(data);
    setName(data.name);
    setEmail(data.email);
  }

  // Update Data
  async function updateData(e) {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    const response = await axios.put(API_URL + "/" + userEdit.id, {
      name,
      email,
    });
    setName("");
    setEmail("");
    getAllData();
    setUserEdit(null);
  }

  // HandleClick
  async function handleClick(e) {
    e.preventDefault();
    if (userEdit) {
      await updateData(e);
    } else {
      await addData(e);
    }
  }

  // Delete Data
  async function deleteData(id) {
    const response = await axios.delete(API_URL + "/" + id);
    getAllData();
  }
  return (
    <div className="wrapper">
      <div className="header">
        <h3>{userEdit ? "Edit Pengguna" : "Tambah Pengguna"}</h3>
        <form className="input-box" type="submit" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">{userEdit ? "Update" : "Tambah"}</button>
        </form>
      </div>
      <div className="data-pengguna">
        <h3>Data Pengguna</h3>
        <ul>
          {users.map((user) => (
            <li>
              <div>
                {user.name} <span className="email">({user.email})</span>
              </div>
              <div>
                <a href="#" className="edit" onClick={() => editData(user)}>
                  Edit
                </a>{" "}
                <a
                  href="#"
                  className="delete"
                  onClick={() => deleteData(user.id)}
                >
                  Delete
                </a>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="footer">
          Afrizal&copy;2025
        </a>
        <div className="medsos">
          <a href="https://www.instagram.com/izall10_?igsh=d294OTM1cGtlYzh6">
            <FaInstagram />
          </a>
          <a href="https://github.com/Afrizal-10">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/afrizal-b8242431b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGtq6zCVzTyqoHzh%2FSyxZ0w%3D%3D">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
