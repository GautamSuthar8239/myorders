// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const inc = () => setCount((count) => count + 1);
//   const dec = () => setCount((count) => count - 1);
//   return (
//     <>
//       <div>
//         <h1>Counter App</h1>
//         <p>Current count: {count}</p>
//         <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
//           <button onClick={dec}>-</button>
//           <button onClick={inc}>+</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal();
  };

  return (
    <div className="App">
      <h1>Enter your name</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nameInput">Name</Label>
          <Input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Hello, {name}!</ModalHeader>
        <ModalBody>
          Your name has been entered as: <strong>{name}</strong>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
