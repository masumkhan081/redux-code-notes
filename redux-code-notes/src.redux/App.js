import React, { useState } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaWindowClose } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <AppHeader />
    </div>
  );
}

function AddToDo({ addTodoPane, setAddTodoPane }) {
  const handleClose = () => setAddTodoPane(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted seems so");
  };
  return (
    <div>
      <Modal
        show={addTodoPane}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add ToDo</Modal.Title>
          <FaWindowClose onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form className="w-100" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <Form.Label className="w-100 text-left">Add ToDo</Form.Label>
              <input
                className="form-control input-sm"
                id="inputsm"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <Form.Group>
              <Form.Label className="w-100 text-left">Status</Form.Label>
              <Form.Select
                className="w-100"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Incomplete</option>
                <option>Complete</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="d-flex mt-4">
              <Button className="btn-outline-info btn-sm mr-auto" type="submit">
                Save
              </Button>
              <Button
                className="btn-outline-info btn-sm ml-auto"
                onClick={handleClose}
                onKeyDown={handleClose}
              >
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
function AppTitle() {
  const stl = {};
  return <h2 style={stl}>ToDo List & Management</h2>;
}
function AppHeader() {
  const [addTodoPane, setAddTodoPane] = useState(false);
  return (
    <div
      className="flex row justify-content-around mt-3"
      style={{ backgroundColor: "Lavender" }}
    >
      <Button
        onClick={() => {
          setAddTodoPane(true);
        }}
        className="btn-info btn-info btn-sm  "
      >
        Add
      </Button>
      <Filter>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </Filter>
      <AddToDo setAddTodoPane={setAddTodoPane} addTodoPane={addTodoPane} />
    </div>
  );
}

function Filter({ children }) {
  return (
    <select className="form-select form-select-sm border-info" id="id_filter">
      {children}
    </select>
  );
}

export default App;
