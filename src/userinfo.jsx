import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Userinfo(props) {
  // const update = props.formhandler;
  console.log(props);

  return (
    <div style={{ width: "30%", margin: "0 auto" }}>
      <Form>
        <h2>Enter Your Details</h2>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => {
              props.setname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              props.setemail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location"
            onChange={(e) => {
              props.setlocation(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Mobile Number"
            onChange={(e) => {
              props.setmobile(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" onClick={props.click}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Userinfo;
